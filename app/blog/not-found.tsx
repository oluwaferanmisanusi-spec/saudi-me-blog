// app/blog/not-found.tsx
import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mb-8">
        This page can not be found, please head back to the home page.
      </p>
      <Link
        href="/"
        className="bg-[#5a9a5a] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
