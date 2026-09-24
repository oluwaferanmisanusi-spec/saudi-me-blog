// app/component/LongFormPost.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import PostBody from "./PostBody";
import AuthorBox from "./AuthorBox";
import StickyTOC from "./StickyTOC";
import { getHeadingText } from "../lib/getHeadingText";
import { urlFor } from "../lib/sanity/image";


function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}


export default function LongFormPost({ post }: { post: any }) {
  const contentRef = useRef<HTMLDivElement>(null);

  const headingsRaw =
    post.body?.filter((b: any) => b._type === "block" && b.style === "h2") ||
    [];

  const headings = headingsRaw.map((h: any) => {
   const text = getHeadingText(h.children);
    return { id: slugify(text), text };
  });

  return (
    <article className="max-w-[1400px] mx-auto py-12 px-[8.125rem] max-xl:px-[5rem] max-sm:px-[2rem]">
      <p className="text-xs text-[#003300] font-semibold mb-2">
        {post.categories?.join(" • ").toUpperCase()}
      </p>
      <h1 className="text-4xl font-bold mb-2 capitalize">{post.title}</h1>
      {post.subtitle && (
        <p className="text-lg text-[#667085] mb-2">{post.subtitle}</p>
      )}
      <p className="text-sm text-gray-400 mb-10">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-8">
  <Image
    src={urlFor(post.image).width(1400).height(600).fit("crop").auto("format").url()}
    alt={post.title}
    fill
    sizes="(max-width: 768px) 100vw, 896px"
    className="object-cover"
  />
      </div>
      <div className="flex gap-12 max-md:flex-col">
        {headings.length > 0 && (
          <StickyTOC contentRef={contentRef} headings={headings} />
        )}

        <div className="flex-1" ref={contentRef}>
          <PostBody body={post.body} />
        </div>
      </div>

      <AuthorBox author={post.author} />
    </article>
  );
}
