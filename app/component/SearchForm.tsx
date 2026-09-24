"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function SearchForm({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleIconClick() {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    runSearch();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    runSearch();
  }

  function runSearch() {
    if (query.trim() === "") return;
    router.push(`/blog?q=${encodeURIComponent(query)}`);
    setQuery("");
    setIsOpen(false);
  }

  function handleClearClick() {
    // removes one character at a time
    setQuery("");
    inputRef.current?.focus();
  }

  // Autofocus input whenever the search opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Click outside closes only if input is empty
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        formRef.current &&
        !formRef.current.contains(e.target as Node) &&
        query.trim() === ""
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [query, setIsOpen]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`flex items-center bg-white rounded-full overflow-hidden transition-all duration-300 ease-in-out max-h-[50px] ${
        isOpen ? "shadow-[0_0_20px_rgba(0,0,0,0.3)]" : "shadow-none"
      }`}
    >
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className={`outline-none transition-all duration-500 ease-in-out ${
          isOpen ? "w-64 pl-4 pr-2 py-2 opacity-100" : "w-0 px-0 py-2 opacity-0"
        }`}
      />

<button
  type="button"
  onClick={handleClearClick}
  className={`p-1 cursor-pointer text-gray-400 hover:text-gray-600 transition-opacity duration-150 ${
    query.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
  aria-label="Clear search"
>
  ✕
</button>

      <button
        type="button"
        onClick={handleIconClick}
        className="py-3 px-2  cursor-pointer hover:bg-black/5 active:bg-black/10 hover:rounded-full"
        aria-label="Search"
      >
        <Image src="/Button.svg" width={36} height={24} alt="search icon" />
      </button>
    </form>
  );
}
