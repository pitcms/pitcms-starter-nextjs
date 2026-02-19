import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { BlogMeta } from "@/components/blog/blog-meta";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - My Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <BlogMeta publishedAt={post.publishedAt} />
        <p className="mt-4 text-gray-600">{post.description}</p>
      </header>
      {post.heroImage && (
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full rounded-lg mb-8"
        />
      )}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml ?? "" }}
      />
    </article>
  );
}
