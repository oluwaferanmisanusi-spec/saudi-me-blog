"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSearchContext } from "./SearchContext";

const topics = [
  "Blog", "News", "Tourism Visa", "Business Visa",
  "Friends & Family", "Transit Visa", "Umrah Visa", "Hajj Visa",
];

export default function TopicFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setIsSearching } = useSearchContext();

  const urlSelected = searchParams.get("category")?.split(",").filter(Boolean) || [];
  const [selected, setSelected] = useState(urlSelected);

  useEffect(() => {
    setSelected(urlSelected);
  }, [searchParams.toString()]);

  function toggleTopic(topic: string) {
    const updated = selected.includes(topic)
      ? selected.filter((t) => t !== topic)
      : [...selected, topic];

    setSelected(updated);       // ticks immediately, no API wait
    setIsSearching(true);       // skeleton shows immediately

    const params = new URLSearchParams(searchParams.toString());
    updated.length > 0 ? params.set("category", updated.join(",")) : params.delete("category");
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="bg-[#eef0fb] rounded-xl p-5">
      <h3 className="font-semibold text-sm mb-3 text-gray-800">FILTER BY TOPIC</h3>
      <ul className="flex flex-col gap-3">
        {topics.map((topic) => (
          <li key={topic} className="flex items-center gap-3">
            <input
              type="checkbox"
              id={topic}
              checked={selected.includes(topic)}
              onChange={() => toggleTopic(topic)}
              className="w-4 h-4 rounded-full accent-[#5a9a5a] cursor-pointer"
            />
            <label htmlFor={topic} className="text-gray-700 cursor-pointer">{topic}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
