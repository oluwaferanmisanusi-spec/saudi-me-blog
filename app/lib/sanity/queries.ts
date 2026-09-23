// lib/sanity/queries.ts
import { groq } from "next-sanity";
import { cache } from "react";
import { client } from "./client";

// lib/sanity/queries.ts

// lib/sanity/queries.ts

export const allPostsQuery = groq`
  *[_type == "post"] {
    ...,
    "bodyText": pt::text(body)
  } [
    title match $search ||
    subtitle match $search ||
    bodyText match $search
  ]
  [
    !defined($categories) || count((categories[]->title)[@ in $categories]) > 0
  ]
  | score(
      boost(title match $search, 3),
      boost(subtitle match $search, 2),
      boost(bodyText match $search, 1)
    )
  | order(_score desc, publishedAt desc)
  [$start...$end] {
    title,
    "slug": slug.current,
    "image": mainImage.asset->url,
    "categories": categories[]->title,
    publishedAt,
    "excerpt": bodyText,
  }
`;

export const allPostsCountQuery = groq`
  count(
    *[_type == "post"] {
      ...,
      "bodyText": pt::text(body)
    } [
      title match $search ||
      subtitle match $search ||
      bodyText match $search
    ]
    [
      !defined($categories) || count((categories[]->title)[@ in $categories]) > 0
    ]
  )
`;


export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title, subtitle, "slug": slug.current, "image": mainImage.asset->url,
    "categories": categories[]->title, postType, publishedAt,
    body[]{ ..., _type == "image" => { ..., "asset": asset-> } },
    "author": author->{ name, role, "image": image.asset->url },
    seo {
      metaTitle,
      metaDescription,
      "shareImage": shareImage.asset->url
    }
  }
`;

// For the footer "Latest News" — always the 4 newest, sorted, no manual work needed
export const latestNewsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...4] {
    title,
    "slug": slug.current,
    "image": mainImage.asset->url,
"categories": categories[]->title,
    publishedAt
  }
`;

export const getPostBySlug = cache(async (slug: string) => {
  return client.fetch(postBySlugQuery, { slug });
});