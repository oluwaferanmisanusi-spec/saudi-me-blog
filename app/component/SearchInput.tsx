"use client";
import { useState, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useSearchContext } from "./SearchContext";

export default function SearchInput({ initialQuery }: { initialQuery: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setIsSearching } = useSearchContext();
  const [query, setQuery] = useState(initialQuery);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    setIsSearching(true); // fires on the very first letter, before the 900ms timer

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      value.trim() ? params.set("q", value.trim()) : params.delete("q");
      params.delete("page");
      router.push(`${pathname}?${params.toString()}`);
    }, 900);
  }

  return (
    <div className="bg-[#eef0fb] rounded-xl p-5 flex-1">
      <h3 className="font-semibold text-sm mb-2 text-gray-800">SEARCH BY KEYWORD</h3>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full border rounded px-3 py-2 bg-white"
      />
    </div>
  );
}