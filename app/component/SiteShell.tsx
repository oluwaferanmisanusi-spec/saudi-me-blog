"use client";

import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";


export default function SiteShell({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="relative overflow-x-clip">
      <div>
        <SideBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>

      <div
        className={`transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-[21.875rem]" : "translate-x-0"
        }`}
      >
        <Header isMenuOpen={isMenuOpen} onMenuClick={toggleMenu} />
        <main>{children}</main>
        {footer}
      </div>
    </div>
  );
}
