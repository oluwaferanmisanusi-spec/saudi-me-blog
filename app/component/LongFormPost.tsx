// app/component/LongFormPost.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import PostBody from "./PostBody";
import AuthorBox from "./AuthorBox";
import StickyTOC from "./StickyTOC";

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
    const text = h.children?.map((c: any) => c.text).join("") || "";
    return { id: slugify(text), text };
  });

  return (
    <article className="max-w-6xl mx-auto py-12 px-[8.125rem] max-xl:px-[5rem] max-sm:px-[2rem]">
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
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex gap-12">
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
// app/component/LongFormPost.tsx
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";

// export default function LongFormPost({ post }: { post: any }) {
//   const headings = post.body?.filter((b: any) => b.style === "h2" || b.style === "h3") || [];

//   return (
//     <article className="max-w-6xl mx-auto px-4 py-12">
//       <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-8">
//         <Image src={post.image} alt={post.title} fill className="object-cover" />
//       </div>
//       <p className="text-xs text-gray-500 font-semibold mb-2">
//         {post.categories?.join(" • ").toUpperCase()}
//       </p>
//       <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
//       <p className="text-sm text-gray-400 mb-10">
//         {new Date(post.publishedAt).toLocaleDateString("en-US", {
//           month: "long", day: "numeric", year: "numeric",
//         })}
//       </p>

//       <div className="flex gap-12">
//         {headings.length > 0 && (
//           <aside className="w-64 flex-shrink-0 hidden lg:block">
//             <div className="sticky top-24 bg-gray-50 rounded-xl p-5">
//               <h3 className="font-semibold text-sm mb-3">Table of Contents</h3>
//               <ul className="flex flex-col gap-2 text-sm text-gray-600">
//                 {headings.map((h: any, i: number) => (
//                   <li key={i}>
//                     <a href={`#heading-${i}`} className="hover:text-[#5a9a5a]">
//                       {h.children?.[0]?.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>
//         )}

//         <div className="prose max-w-none flex-1">
//           <PortableText value={post.body} />
//         </div>
//       </div>

//       {post.author && (
//         <p className="text-sm text-gray-500 mt-16 border-t pt-4">
//           Written by <span className="font-semibold">{post.author}</span>
//         </p>
//       )}
//     </article>
//   );
// }
