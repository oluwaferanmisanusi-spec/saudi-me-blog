// lib/sanity/queries.ts
import { groq } from "next-sanity";

// lib/sanity/queries.ts

export const allPostsQuery = groq`
  *[_type == "post"
    && (!defined($search) ||
        title match $search + "*" ||
        categories[]->title match $search + "*" ||
        pt::text(body) match $search + "*"
    )
    && (!defined($categories) || count((categories[]->title)[@ in $categories]) > 0)
  ] | order(publishedAt desc) [$start...$end] {
    title,
    "slug": slug.current,
    "image": mainImage.asset->url,
    "categories": categories[]->title,
    publishedAt,
    "excerpt": pt::text(body),
  }
`;

export const allPostsCountQuery = groq`
  count(*[_type == "post"
    && (!defined($search) ||
        title match $search + "*" ||
        categories[]->title match $search + "*" ||
        pt::text(body) match $search + "*"
    )
    && (!defined($categories) || count((categories[]->title)[@ in $categories]) > 0)
  ])
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title, subtitle, "slug": slug.current, "image": mainImage.asset->url,
    "categories": categories[]->title, postType, publishedAt,
    "body": body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->
      }
    },
    "author": author->{ name, role, "image": image.asset->url }
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
