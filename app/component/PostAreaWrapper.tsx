"use client";
import { useEffect } from "react";
import { useSearchContext } from "./SearchContext"
import PostsSkeleton from "./PostsSkeleton";

export default function PostsAreaWrapper({
  resultsKey,
  children,
}: {
  resultsKey: string;
  children: React.ReactNode;
}) {
  const { isSearching, setIsSearching } = useSearchContext();

  useEffect(() => {
    setIsSearching(false); // new server-rendered results arrived → drop skeleton
  }, [resultsKey]);

  return isSearching ? <PostsSkeleton /> : <>{children}</>;
}