export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">{title}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Content coming soon.</p>
    </div>
  );
}

