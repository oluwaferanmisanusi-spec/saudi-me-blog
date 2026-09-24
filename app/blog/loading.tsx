// app/blog/loading.tsx
export default function BlogLoading() {
  return (
    <div className="flex gap-8 max-w-[1400px] mx-auto py-12 animate-pulse px-[8.125rem] max-xl:px-[5rem] max-sm:px-[2rem]">
      <aside className="w-64 flex-shrink-0 max-md:hidden">
        <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
        <div className="h-10 w-full bg-gray-200 rounded mb-6" />

        <div className="h-4 w-28 bg-gray-200 rounded mb-2" />
        <ul className="flex flex-col gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className="h-4 w-24 bg-gray-200 rounded" />
          ))}
        </ul>
      </aside>

      <div className="flex-1 flex flex-col gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-64 h-40 flex-shrink-0 bg-gray-200 rounded-lg" />
            <div className="flex-1 flex flex-col gap-3 py-2">
              <div className="h-3 w-20 bg-gray-200 rounded" />
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-40 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
