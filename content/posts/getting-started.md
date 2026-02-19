---
title: "Next.js + pitcms でブログを始める"
description: "このスターターテンプレートの使い方を解説します。セットアップから記事の追加、デプロイまでの手順を紹介します。"
publishedAt: "2025-01-10"
isDraft: false
---

## セットアップ

このスターターテンプレートを使ってブログを始める手順を解説します。

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/pitcms-starter-nextjs.git
cd pitcms-starter-nextjs
pnpm install
```

### 2. 開発サーバーを起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスすると、ブログが表示されます。

### 3. 記事を追加

`content/posts/` ディレクトリに Markdown ファイルを作成します。

```markdown
---
title: "記事のタイトル"
description: "記事の説明文"
publishedAt: "2025-01-20"
isDraft: false
---

記事の本文をここに書きます。
```

### 4. pitcms と連携

1. [pitcms ダッシュボード](https://app.pitcms.net/) にログイン
2. GitHub リポジトリを連携
3. Web UI でコンテンツを編集

### 5. デプロイ

Vercel にデプロイするのが最も簡単です：

1. [Vercel](https://vercel.com) にログイン
2. リポジトリをインポート
3. 自動でビルド＆デプロイ

pitcms でコンテンツを更新すると、自動的に再デプロイされます。
