import { NextResponse } from "next/server";
import { getGalleryImages } from "@/utils/googleDrive";
import { gallery } from "@/resources";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  const driveLink = gallery.driveLink;

  const folderIdMatch = driveLink.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  const folderId = folderIdMatch?.[1];

  const images = await getGalleryImages(driveLink);

  return NextResponse.json({
    debug: {
      apiKeyPresent: !!apiKey,
      apiKeyPrefix: apiKey ? apiKey.slice(0, 8) + "..." : null,
      driveLink,
      folderId,
    },
    imageCount: images.length,
    images,
  });
}
