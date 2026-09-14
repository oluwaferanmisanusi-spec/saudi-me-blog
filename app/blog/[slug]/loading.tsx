export default function ArticleLoading() {
  return (
    <div className="max-w-6xl mx-auto py-12 animate-pulse px-[8.125rem] max-xl:px-[5rem]">
      <div className="h-3 w-32 bg-gray-200 rounded mb-3" />
      <div className="h-8 w-3/4 bg-gray-200 rounded mb-3" />
      <div className="h-4 w-1/2 bg-gray-200 rounded mb-10" />
      <div className="w-full aspect-[21/9] bg-gray-200 rounded-xl mb-8" />
      <div className="flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 w-full bg-gray-200 rounded" />
        ))}
      </div>
    </div>
  );
}
