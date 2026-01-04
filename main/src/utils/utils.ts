import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from 'next/navigation';

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    console.error(`[getMDXFiles] Directory not found: ${dir}`);
    console.error(`[getMDXFiles] Current working directory: ${process.cwd()}`);
    console.error(`[getMDXFiles] Attempted absolute path: ${path.resolve(dir)}`);
    return []; // Return empty array instead of calling notFound()
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    console.error(`[readMDXFile] File not found: ${filePath}`);
    throw new Error(`MDX file not found: ${filePath}`);
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  
  console.log(`[getPosts] Attempting to read from: ${postsDir}`);
  console.log(`[getPosts] Current working directory: ${process.cwd()}`);
  console.log(`[getPosts] Custom path array:`, customPath);
  
  // Try the standard path first
  if (fs.existsSync(postsDir)) {
    console.log(`[getPosts] Found directory at: ${postsDir}`);
    return getMDXData(postsDir);
  }
  
  // If standard path doesn't work, try alternative paths that Vercel might use
  const alternativePaths = [
    path.join(process.cwd(), ".next", "server", ...customPath),
    path.join(process.cwd(), "..", ...customPath),
  ];
  
  for (const altPath of alternativePaths) {
    console.log(`[getPosts] Trying alternative path: ${altPath}`);
    if (fs.existsSync(altPath)) {
      console.log(`[getPosts] Found directory at alternative path: ${altPath}`);
      return getMDXData(altPath);
    }
  }
  
  console.error(`[getPosts] Could not find directory at any attempted paths`);
  return [];
}
