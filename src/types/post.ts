export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  heroImage?: string;
  isDraft: boolean;
  content: string;       // raw markdown
  contentHtml?: string;  // HTML
}
