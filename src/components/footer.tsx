export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="mx-auto max-w-3xl px-4 py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} pitcms Blog. Powered by pitcms.</p>
      </div>
    </footer>
  );
}
