// app/blog/error.tsx
"use client";

import Link from "next/link";

export default function BlogError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Something went wrong
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        There has been an error, please reload the page or go back to the home
        page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#5a9a5a] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Reload
        </button>
        <Link
          href="/"
          className="border border-[#5a9a5a] text-[#5a9a5a] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
