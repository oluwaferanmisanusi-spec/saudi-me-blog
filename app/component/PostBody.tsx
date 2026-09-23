// app/component/PostBody.tsx
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getHeadingText } from "../lib/getHeadingText";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export const postBodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children, value }) => {
   const text = getHeadingText(value.children);
  return (
    <h2
      id={slugify(text)}
      className="text-2xl/[32px] font-bold text-[#003300] mt-[48px] mb-4 capitalize"
    >
      {children}
    </h2>
  );
},
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#5a9a5a] bg-gray-50 italic text-gray-700 px-5 py-4 my-6 rounded-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1 text-brand-secondary">
        {children}
      </ul>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#5a9a5a] underline underline-offset-2 hover:text-[#4a8a4a]"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    faqItem: ({ value }) => (
      <div className="flex gap-3 mb-6">
        <span className="text-[#5a9a5a] mt-1">■</span>
        <div>
          <p className="font-semibold text-gray-900">{value.heading}</p>
          <p className="text-gray-600 mt-1">{value.paragraph}</p>
        </div>
      </div>
    ),
    image: ({ value }) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden my-8">
          <Image
            src={value.asset.url}
            alt={value.alt || ""}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

export default function PostBody({ body }: { body: any }) {
  return <PortableText value={body} components={postBodyComponents} />;
}
