# pitcms Starter - Next.js Blog

[pitcms](https://pitcms.net/) と Next.js で構築されたブログのスターターテンプレートです。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pitcms/nextjs-starter)

## 特徴

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** でスタイリング
- **pitcms** で Git ベースのコンテンツ管理
- **SSG** で完全な静的サイトを生成
- **お問い合わせフォーム** (pitcms フォーム機能)

## セットアップ

### 1. クローン＆インストール

```bash
git clone https://github.com/your-username/pitcms-starter-nextjs.git
cd pitcms-starter-nextjs
pnpm install
```

### 2. 開発サーバーを起動

```bash
pnpm dev
```

http://localhost:3000 でブログが表示されます。

### 3. 記事を追加

`content/posts/` に Markdown ファイルを追加します:

```markdown
---
title: "記事タイトル"
description: "記事の説明"
publishedAt: "2025-01-20"
isDraft: false
---

本文を Markdown で書きます。
```

### 4. pitcms と連携

1. [pitcms](https://app.pitcms.net/) にログイン
2. GitHub App をインストールし、このリポジトリを連携
3. pitcms のダッシュボードでコンテンツを編集
4. 保存すると自動で GitHub にコミットされます

### 5. お問い合わせフォーム

`src/app/contact/page.tsx` の `FORM_ACTION` を、pitcms ダッシュボードで作成したフォームのエンドポイント URL に置き換えてください。

### 6. デプロイ

Vercel にデプロイ:

```bash
pnpm build  # ローカルでビルド確認
```

Vercel にリポジトリをインポートすれば自動デプロイされます。

## ディレクトリ構成

```
├── content/posts/         # ブログ記事 (Markdown)
├── pitcms.jsonc           # pitcms 設定ファイル
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # React コンポーネント
│   ├── lib/               # ユーティリティ
│   └── types/             # TypeScript 型定義
└── public/                # 静的ファイル
```

## ライセンス

MIT
