import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/blog-card";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className='mx-auto max-w-3xl px-4'>
      {/* Hero */}
      <section className='py-16 text-center'>
        <h1 className='text-4xl font-bold tracking-tight'>pitcms Blog</h1>
        <p className='mt-4 text-lg text-gray-600'>
          pitcmsとNext.jsで構築されたブログ
        </p>
      </section>

      {/* Latest Posts */}
      <section className='pb-16'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-2xl font-bold'>最新の記事</h2>
          <Link href='/blog' className='text-sm text-blue-600 hover:underline'>
            すべての記事 &rarr;
          </Link>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
