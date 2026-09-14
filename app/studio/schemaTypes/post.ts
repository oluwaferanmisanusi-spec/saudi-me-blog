// studio/schemaTypes/post.ts
export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "mainImage", type: "image" },
    {
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    { name: "author", type: "reference", to: [{ type: "author" }] },
    {
      name: "postType",
      title: "Post Type",
      type: "string",
      options: {
        list: [
          { title: "Long-form", value: "long" },
          { title: "Short-form", value: "short" },
        ],
        layout: "radio",
      },
      initialValue: "short",
    },
    { name: "publishedAt", type: "datetime" },
    { name: "excerpt", type: "text" },
    { name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] },
  ],
};
