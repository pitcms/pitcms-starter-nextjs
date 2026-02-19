import { getAllPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/blog-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ - My Blog",
  description: "ブログ記事一覧",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">ブログ</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-gray-500 text-center py-12">記事がまだありません。</p>
      )}
    </div>
  );
}
