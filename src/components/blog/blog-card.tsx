import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import type { Post } from "@/types/post";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.heroImage && (
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
        )}
        <time className="text-sm text-gray-500">{formatDate(post.publishedAt)}</time>
        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mt-1">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.description}</p>
      </Link>
    </article>
  );
}
