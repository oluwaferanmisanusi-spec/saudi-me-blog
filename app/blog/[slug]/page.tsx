// app/blog/[slug]/page.tsx
import { client } from "../../lib/sanity/client";
import { postBySlugQuery } from "../../lib/sanity/queries";
import { notFound } from "next/navigation";
import LongFormPost from "../../component/LongFormPost";
import ShortFormPost from "../../component/ShortFormPost";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  return post.postType === "long" ? (
    <LongFormPost post={post} />
  ) : (
    <ShortFormPost post={post} />
  );
}
