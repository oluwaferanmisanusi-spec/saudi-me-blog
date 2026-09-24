


// app/component/PostsList.tsx
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/sanity/client";
import { allPostsQuery } from "../lib/sanity/queries";
import { truncate } from "../lib/truncate";
import { urlFor } from "../lib/sanity/image";

const PAGE_SIZE = 10;

export default async function PostsList({
  q,
  categoryList,
  pageNum,
}: {
  q?: string;
  categoryList?: string[];
  pageNum: number;
}) {
  const start = (pageNum - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

const posts = await client.fetch(allPostsQuery, {
  search: q ? `${q}*` : "*",   // was: search: q || null
  categories: categoryList || null,
  start,
  end,
});

  return (
    <div className="flex-1 flex flex-col">
      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No posts found</h2>
          <p className="text-gray-500">
            {q ? `We couldn't find any posts matching "${q}".` : "No posts found for this filter yet."}
          </p>
        </div>
      ) : (
        posts.map((post: any, i: number) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`flex gap-6 py-8 max-md:flex-col ${i !== 0 ? "border-t border-gray-200" : ""}`}
          >
            <div className="relative w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden max-md:w-full max-md:h-60">
              <Image
    src={urlFor(post.image).width(256).height(160).fit("crop").auto("format").url()}
    alt={post.title}
    fill
    sizes="(max-width: 768px) 100vw, 256px"
    className="object-cover"
  />
            </div>
                                    <div>
                              <p className="text-xs text-gray-500 font-semibold">
                                {post.categories
                                  ?.map((c: string) => c.toUpperCase())
                                  .join(" • ")}
                              </p>
                              <h2 className="font-semibold text-lg mt-1">{post.title}</h2>
                              <p className="text-sm text-gray-400 mt-1">
                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                              <p className="text-gray-600 text-sm mt-2">
                                {truncate(post.excerpt)}
                              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}