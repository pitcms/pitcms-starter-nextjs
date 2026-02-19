import { formatDate } from "@/lib/format-date";

export function BlogMeta({
  publishedAt,
}: {
  publishedAt: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <time>{formatDate(publishedAt)}</time>
    </div>
  );
}
