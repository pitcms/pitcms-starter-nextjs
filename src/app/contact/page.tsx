import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ - My Blog",
  description: "お問い合わせフォーム",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>
      <form
        method="POST"
        action="https://app.pitcms.net/api/forms/YOUR_FORM_ID"
        className="space-y-6"
      >
        {/* Honeypot */}
        <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          送信する
        </button>
      </form>
    </div>
  );
}
