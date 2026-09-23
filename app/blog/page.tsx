import { Suspense } from "react";
import { client } from "../lib/sanity/client";
import { allPostsCountQuery } from "../lib/sanity/queries";
import TopicFilter from "../component/TopicFilter";
import FilterPanel from "../component/FilterPanel";
import SearchInput from "../component/SearchInput";
import PostsList from "../component/PostsList";
import PostsAreaWrapper from "../component/PostAreaWrapper";
import PostsSkeleton from "../component/PostsSkeleton";
import Pagination from "../component/Pagination";
import { SearchProvider } from "../component/SearchContext";
import type { Metadata } from "next";



export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search results for "${q}"` : "Blog",
    description: "Read our latest articles on visas, travel, and more.",
  };
}

const PAGE_SIZE = 10;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
}) {
  const { q, category, page } = await searchParams;
  const categoryList = category ? category.split(",").filter(Boolean) : undefined;
  const pageNum = Math.max(1, Number(page) || 1);
  const resultsKey = `${q ?? ""}-${category ?? ""}-${pageNum}`;

const totalCount = await client.fetch(allPostsCountQuery, {
  search: q ? `${q}*` : "*",   // was: search: q || null
  categories: categoryList || null,
});
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <SearchProvider>
      <div className="flex gap-8 max-w-6xl mx-auto py-12 px-[8.125rem] max-xl:px-[5rem] max-lg:flex-col max-sm:px-[2rem]">
        <FilterPanel
          searchInput={<SearchInput initialQuery={q ?? ""} />}
          topicFilter={<TopicFilter />}
        />
        <div className="flex-1 flex flex-col">
          <PostsAreaWrapper resultsKey={resultsKey}>
            <Suspense key={resultsKey} fallback={<PostsSkeleton />}>
              <PostsList q={q} categoryList={categoryList} pageNum={pageNum} />
            </Suspense>
          </PostsAreaWrapper>

 <div className="flex justify-center mt-8">
              <Pagination current={pageNum} total={totalPages} />
            </div>
        </div>
      </div>
    </SearchProvider>
  );
}