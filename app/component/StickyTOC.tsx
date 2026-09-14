// app/component/StickyTOC.tsx
"use client";

import { useEffect, useState } from "react";

export default function StickyTOC({
  contentRef,
  headings,
}: {
  contentRef: React.RefObject<HTMLDivElement | null>;
  headings: { id: string; text: string }[];
}) {
  const [asideHeight, setAsideHeight] = useState<number | undefined>(undefined);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setAsideHeight(Math.max(entry.contentRect.height - 500, 0));
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [contentRef]);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside
      className="w-64 flex-shrink-0 hidden lg:block"
      style={{ height: asideHeight ? `${asideHeight}px` : undefined }}
    >
      <div className="sticky top-24 bg-gray-50 rounded-xl p-5">
        <h3 className="font-semibold text-2xl mb-[24px] text-[#002800]">
          Table of Contents
        </h3>
        <ul className="flex flex-col gap-2 text-base text-[#002800] font-medium">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block px-3 py-2 rounded-lg hover:bg-[#F0F5F0] capitalize ${
                  activeId === h.id ? "bg-[#F0F5F0]" : ""
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
