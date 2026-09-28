"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useSearchContext } from "./SearchContext";

const topics = [
  "Blog", "News", "Tourism Visa", "Business Visa",
  "Friends & Family", "Transit Visa", "Umrah Visa", "Hajj Visa",
];

const parse = (v: string) => v.split(",").filter(Boolean);

export default function TopicFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setIsSearching } = useSearchContext();

  const urlKey = searchParams.get("category") ?? "";

  // the checkboxes own their state; the URL never overwrites it mid-click
  const [selected, setSelected] = useState<string[]>(parse(urlKey));

  const appliedKey = useRef(urlKey);           // last category string we know the URL has/will have
  const pushedKeys = useRef<Set<string>>(new Set()); // URLs we pushed that may still be arriving
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mounted = useRef(false);

  // Sync FROM the URL only when the change came from outside (back button, etc.)
  useEffect(() => {
    if (pushedKeys.current.has(urlKey)) {
      // our own navigation arriving: ignore it, so it can't undo newer clicks
      if (urlKey === appliedKey.current) pushedKeys.current.clear(); // fully settled
      return;
    }
    appliedKey.current = urlKey;
    pushedKeys.current.clear();
    setSelected(parse(urlKey));
  }, [urlKey]);

  // Sync TO the URL whenever the selection changes (debounced)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    const key = selected.join(",");
    if (timer.current) clearTimeout(timer.current);

    if (key === appliedKey.current) {
      // user ended up back where the URL already is: nothing to search
      if (pushedKeys.current.size === 0) setIsSearching(false);
      return;
    }

    setIsSearching(true); // skeleton shows immediately

    timer.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      key ? params.set("category", key) : params.delete("category");
      params.delete("page");

      appliedKey.current = key;
      pushedKeys.current.add(key);
      router.push(`${pathname}?${params.toString()}`);
    }, 300);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [selected]);

  function toggleTopic(topic: string) {
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
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
            <label htmlFor={topic} className="text-gray-700 cursor-pointer">
              {topic}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}