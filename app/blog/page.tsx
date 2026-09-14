// app/blog/page.tsx
// app/blog/page.tsx
import { client } from "../lib/sanity/client";
import { allPostsQuery, allPostsCountQuery } from "../lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import TopicFilter from "../component/TopicFilter";
import { truncate } from "../lib/truncate";
import Pagination from "../component/Pagination";
import FilterPanel from "../component/FilterPanel";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
}) {
  const { q, category, page } = await searchParams;
  const categoryList = category
    ? category.split(",").filter(Boolean)
    : undefined;

  // const posts = await client.fetch(allPostsQuery, {
  //   search: q || null,
  //   categories: categoryList || null,
  // });

  const PAGE_SIZE = 10;
  const pageNum = Math.max(1, Number(page) || 1);
  const start = (pageNum - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const [posts, totalCount] = await Promise.all([
    client.fetch(allPostsQuery, {
      search: q || null,
      categories: categoryList || null,
      start,
      end,
    }),
    client.fetch(allPostsCountQuery, {
      search: q || null,
      categories: categoryList || null,
    }),
  ]);
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <div>
      <div className="flex gap-8 max-w-6xl mx-auto py-12 px-[8.125rem] max-xl:px-[5rem] max-lg:flex-col">
<FilterPanel
  searchInput={
    <div className="bg-[#eef0fb] rounded-xl p-5 flex-1">
      <form>
        <h3 className="font-semibold text-sm mb-2 text-gray-800">SEARCH BY KEYWORD</h3>
        <input
          type="text"
          name="q"
          defaultValue={q}
          className="w-full border rounded px-3 py-2 bg-white"
        />
      </form>
    </div>
  }
  topicFilter={<TopicFilter />}
/>

        <div className="flex-1 flex flex-col">
          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                No posts found
              </h2>
              <p className="text-gray-500">
                {q
                  ? `We couldn't find any posts matching "${q}".`
                  : "No posts found for this filter yet."}
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
                    src={post.image}
                    alt={post.title}
                    fill
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
      </div>
      <Pagination current={pageNum} total={totalPages} />
    </div>
  );
}
