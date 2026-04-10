export type GalleryImage = {
  src: string;
  alt: string;
  orientation: "horizontal" | "vertical";
};

function extractFolderId(driveLink: string): string | null {
  const match = driveLink.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export async function getGalleryImages(driveLink: string): Promise<GalleryImage[]> {
  const folderId = extractFolderId(driveLink);
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!folderId || folderId === "YOUR_FOLDER_ID") {
    console.warn("[Gallery] No Google Drive folder ID set in content.js");
    return [];
  }

  if (!apiKey) {
    console.warn("[Gallery] GOOGLE_DRIVE_API_KEY not set in .env.local");
    return [];
  }

  const params = new URLSearchParams({
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
    fields: "files(id,name,imageMediaMetadata)",
    pageSize: "100",
    key: apiKey,
  });

  try {
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params}`,
      // Cache for 1 hour — new images appear within an hour without redeployment
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("[Gallery] Drive API error:", err);
      return [];
    }

    const data = await res.json();

    return (data.files ?? []).map((file: {
      id: string;
      name: string;
      imageMediaMetadata?: { width?: number; height?: number };
    }) => {
      const width = file.imageMediaMetadata?.width ?? 1;
      const height = file.imageMediaMetadata?.height ?? 1;
      return {
        // Google's image serving CDN — works for any publicly shared file
        src: `https://lh3.googleusercontent.com/d/${file.id}=w1920`,
        alt: file.name.replace(/\.[^/.]+$/, ""), // strip extension
        orientation: width >= height ? "horizontal" : "vertical",
      } satisfies GalleryImage;
    });
  } catch (err) {
    console.error("[Gallery] Failed to fetch from Drive API:", err);
    return [];
  }
}
