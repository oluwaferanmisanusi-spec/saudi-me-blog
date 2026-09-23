
"use client";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext<{
  isSearching: boolean;
  setIsSearching: (v: boolean) => void;
} | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <SearchContext.Provider value={{ isSearching, setIsSearching }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearchContext must be used within SearchProvider");
  return ctx;
}