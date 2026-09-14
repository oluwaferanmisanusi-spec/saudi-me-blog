// app/component/ShortFormPost.tsx
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import PostBody, { postBodyComponents } from "./PostBody";
import AuthorBox from "./AuthorBox";

export default function ShortFormPost({ post }: { post: any }) {
  return (
    <article className="max-w-3xl mx-auto py-12 px-[8.125rem] max-xl:px-[5rem]">
      <p className="text-xs text-[#003300] font-semibold mb-2">
        {post.categories?.join(" • ").toUpperCase()}
      </p>
      <h1 className="text-3xl font-bold mb-2 capitalize">{post.title}</h1>
      {post.subtitle && (
        <p className="text-lg text-[#667085] mb-2">{post.subtitle}</p>
      )}
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="prose max-w-none">
        <PostBody body={post.body} />
      </div>
      <AuthorBox author={post.author} />
    </article>
  );
}
