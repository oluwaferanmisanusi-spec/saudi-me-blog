// app/component/Pagination.tsx
"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function Pagination({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function hrefFor(p: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    return `${pathname}?${params.toString()}`;
  }

  const pages = new Set(
    [1, 2, current - 1, current, current + 1, total - 1, total].filter(
      (p) => p >= 1 && p <= total,
    ),
  );
  const sorted = Array.from(pages).sort((a, b) => a - b);

  return (
    <div className="flex items-center gap-2 justify-center mt-10">
      <Link href={hrefFor(Math.max(1, current - 1))} className="px-2">
        ‹
      </Link>
      {sorted.map((p, i) => (
        <span key={p} className="flex items-center">
          {i > 0 && p - sorted[i - 1] > 1 && (
            <span className="px-2 text-gray-400">…</span>
          )}
          <Link
            href={hrefFor(p)}
            className={`w-8 h-8 flex items-center justify-center rounded ${p === current ? "bg-[#5a9a5a] text-white" : "text-gray-700"}`}
          >
            {p}
          </Link>
        </span>
      ))}
      <Link href={hrefFor(Math.min(total, current + 1))} className="px-2">
        ›
      </Link>
    </div>
  );
}
