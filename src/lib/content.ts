import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Post } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        heroImage: data.heroImage,
        isDraft: data.isDraft ?? false,
        content,
      } as Post;
    })
    .filter((post) => !post.isDraft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    heroImage: data.heroImage,
    isDraft: data.isDraft ?? false,
    content,
    contentHtml,
  } as Post;
}
