---
title: "Next.js + pitcms でブログを始める"
description: "このスターターテンプレートの使い方を解説します。セットアップから記事の追加、デプロイまでの手順を紹介します。"
publishedAt: "2026-02-02"
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

このスターターにはすでに `pitcms.jsonc` が含まれているため、導入は簡単です。

1. このリポジトリを GitHub にプッシュする
2. [pitcms ダッシュボード](https://app.pitcms.net/) にログイン
3. 「新規プロジェクト作成」をクリックし、「GitHub と連携」ボタンから pitcms の GitHub App をリポジトリにインストール
4. 連携が完了したら、リポジトリを選択してプロジェクトを作成
5. `pitcms.jsonc` が自動検出され、ダッシュボードにコレクション（ブログ記事）が表示される
6. Web UI でコンテンツを編集・公開

pitcms での編集内容はプルリクエストとして GitHub リポジトリに反映されます。

### 5. デプロイ

Vercel にデプロイするのが最も簡単です：

1. [Vercel](https://vercel.com) にログイン
2. リポジトリをインポート
3. 自動でビルド＆デプロイ

pitcms でコンテンツを更新すると、自動的に再デプロイされます。

### 6. プレビュー

pitcms のダッシュボードの「設定」→「プレビュー」から Vercel を選択すると、プレビュー機能を有効にできます。

設定すると、pitcms は編集セッションで作られたブランチの Vercel デプロイを自動的に検出し、ダッシュボード上にプレビューリンクを表示します。公開前に変更内容を確認できるので、安心してコンテンツを編集できます。
