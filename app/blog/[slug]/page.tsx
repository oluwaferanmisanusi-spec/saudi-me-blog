// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LongFormPost from "../../component/LongFormPost";
import ShortFormPost from "../../component/ShortFormPost";
import { getPostBySlug } from "../../lib/sanity/queries";
import { urlFor } from "../../lib/sanity/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug); // ← was client.fetch(postBySlugQuery, { slug })

  if (!post) return { title: "Post not found" };

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.subtitle || "";
  const image = post.seo?.shareImage || (post.image ? urlFor(post.image).width(1200).height(630).url() : null);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return post.postType === "long" ? (
    <LongFormPost post={post} />
  ) : (
    <ShortFormPost post={post} />
  );
}
