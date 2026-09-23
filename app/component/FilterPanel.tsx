// app/component/FilterPanel.tsx
"use client";

import { useState } from "react";

export default function FilterPanel({
  searchInput,
  topicFilter,
}: {
  searchInput: React.ReactNode;
  topicFilter: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
      {/* Toggle bar — mobile/tablet only */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:hidden flex items-center gap-3 w-full bg-[#5a9a5a] text-white font-semibold px-5 py-4 rounded-lg mb-4"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
        FILTERS
      </button>

      {/* Filter content — always visible on desktop, toggled on mobile/tablet */}
      <div className={`${isOpen ? "flex" : "hidden"} lg:flex flex-col sm:flex-row lg:flex-col gap-6`}>
        {searchInput}
        {topicFilter}
      </div>
    </div>
  );
}