import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ - pitcms Blog",
  description: "お問い合わせフォーム",
};

// ============================================================
// pitcms フォーム機能の設定方法
// ============================================================
// 1. pitcms ダッシュボードの「設定」→「フォーム」からフォームを作成
// 2. フォームを作成するとエンドポイント URL が発行される
// 3. 下記の FORM_ACTION の値を発行された URL に置き換える
//    例: "https://api.pitcms.net/api/forms/abc123"
// 4. name 属性はフォーム設定で定義したフィールド名と一致させる
//
// 詳細: https://pitcms.net/docs/forms/setup
// ============================================================

const FORM_ACTION = "YOUR_FORM_URL";
const isConfigured = FORM_ACTION !== "YOUR_FORM_URL";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>

      {!isConfigured && (
        <div className="mb-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
          <p className="font-medium">フォームが未設定です</p>
          <p className="mt-1">
            pitcms ダッシュボードの「設定」→「フォーム」からフォームを作成し、
            <code className="rounded bg-yellow-100 px-1 py-0.5">
              src/app/contact/page.tsx
            </code>{" "}
            の <code className="rounded bg-yellow-100 px-1 py-0.5">FORM_ACTION</code>{" "}
            を発行された URL に置き換えてください。
          </p>
          <a
            href="https://pitcms.net/docs/forms/setup"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-yellow-900 underline hover:no-underline"
          >
            設定方法を見る
          </a>
        </div>
      )}

      <form method="POST" action={FORM_ACTION} className="space-y-6">
        {/* ハニーポット（スパム対策用の非表示フィールド。ボットが自動入力すると検出される） */}
        <input
          type="text"
          name="_hp"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
          disabled={!isConfigured}
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
        >
          送信する
        </button>
      </form>
    </div>
  );
}
