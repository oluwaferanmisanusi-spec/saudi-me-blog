"use client";

import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <SideBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>

      <div
        className={`transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-[21.875rem]" : "translate-x-0"
        }`}
      >
        <Header isMenuOpen={isMenuOpen} onMenuClick={toggleMenu} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
