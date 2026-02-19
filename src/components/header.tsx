import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          My Blog
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            ブログ
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
