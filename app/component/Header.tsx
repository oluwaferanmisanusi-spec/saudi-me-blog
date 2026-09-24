"use client"

import Image from "next/image";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { useState } from "react";

export default function Header({
  isMenuOpen,
  onMenuClick,
}: {
  isMenuOpen: boolean;
  onMenuClick: () => void;
}) {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className=" py-[1.875rem]   px-[3.125rem] grid grid-cols-3 max-sm:pr-8 max-sm:pl-4">
      <div className="content-center">
        <button onClick={onMenuClick} aria-label="Toggle menu"  className="p-4 rounded-full transition-colors duration-200 hover:bg-black/5 active:bg-black/10 active:scale-95 cursor-pointer ">
          <Image src="/Link.svg" width={43} height={24.98} alt="menu bar" className="max-sm:w-[38px] max-sm:h-auto" />
        </button>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <Image
            src="/LogoHeader.svg"
            width={175}
            height={88}
            alt="Saudi visa Logo"
          />
        </Link>
      </div>

      <div className="flex gap-[1.56rem] justify-end max-sm:hidden ">
        <div className="content-center">
           <SearchForm isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        </div>
      
        <div  className={`content-center transition-all duration-500 ease-in-out ${
      isSearchOpen ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
    }`}>
          <a
            href="https://saudi.etavisaservices.ae/en/check-eligibility"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-brand-secondary py-[0.75rem] px-[1.56rem] rounded-full text-[0.8125] text-brand-primary font-semibold max-lg:hidden hover:bg-[#497c49] active:bg-[#497c49]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
