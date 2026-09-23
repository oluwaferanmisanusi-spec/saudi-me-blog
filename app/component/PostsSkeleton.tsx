export default function PostsSkeleton() {
  return (
    <div className="flex-1 flex flex-col animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`flex gap-6 py-8 max-md:flex-col ${i !== 0 ? "border-t border-gray-200" : ""}`}>
          <div className="w-64 h-40 flex-shrink-0 rounded-lg bg-gray-200 max-md:w-full max-md:h-60" />
          <div className="flex-1 flex flex-col gap-3 py-1">
            <div className="h-3 w-32 bg-gray-200 rounded" />
            <div className="h-5 w-3/4 bg-gray-200 rounded" />
            <div className="h-5 w-1/2 bg-gray-200 rounded" />
            <div className="h-3 w-full bg-gray-200 rounded mt-2" />
            <div className="h-3 w-full bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}