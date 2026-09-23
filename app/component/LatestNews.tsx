// app/components/LatestNews.tsx

import { client } from "../lib/sanity/client";
import { latestNewsQuery } from "../lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // re-check Sanity every 60s for new posts

export default async function LatestNews() {
  let posts = [];
  try {
    posts = await client.fetch(latestNewsQuery);
  } catch (error) {
    console.error("Failed to fetch latest news:", error);
    return null; // or a small fallback message
  }

  if (!posts?.length) return null;

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-10">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-[8.125rem] max-xl:px-[5rem] max-sm:px-[2rem]">
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="text-left"
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 font-semibold mt-3">
              ● {post.category?.toUpperCase()}
            </p>
            <h3 className="font-semibold mt-1 capitalize">{post.title}</h3>
            <p className="text-sm text-gray-400 mt-1">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
