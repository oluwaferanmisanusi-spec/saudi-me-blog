import Link from "next/link";

export default function SideBar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`content-center fixed top-0 left-0 h-full w-[21.875rem] bg-[#F9F9F9] shadow-[[inset_-15px_1px_30px_-17px_rgba(0,0,0,0.55)]] z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="p-[1.875rem] flex flex-col gap-4">
        <Link
          href="/"
          className="py-[1.25rem] text-brand-secondary border-b-[1px]  border-b-[rgba(0,0,0,0.2)] text-lg font-bold hover:text-[#497c49] active:text-[#497c49]"
          onClick={onClose}
        >
          Home
        </Link>
        <a
          onClick={onClose}
          href="https://saudi.etavisaservices.ae/en/check-eligibility"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[1.25rem] text-brand-secondary border-b-[1px]  border-b-[rgba(0,0,0,0.2)] text-lg font-bold hover:text-[#497c49] active:text-[#497c49]"
        >
          Apply Now
        </a>
        <a
          onClick={onClose}
          href="https://saudi.etavisaservices.ae/en/check-eligibility"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[1.25rem] text-brand-secondary border-b-[1px]  border-b-[rgba(0,0,0,0.2)] text-lg font-bold hover:text-[#497c49] active:text-[#497c49]"
        >
          Check Eligibility
        </a>
        <Link
          onClick={onClose}
          href="/blog"
          className="py-[1.25rem] text-brand-secondary border-b-[1px]  border-b-[rgba(0,0,0,0.2)] text-lg font-bold hover:text-[#497c49] active:text-[#497c49]"
        >
          Blog
        </Link>
        <Link
          onClick={onClose}
          href="/about"
          className="py-[1.25rem] text-brand-secondary border-b-[1px]  border-b-[rgba(0,0,0,0.2)] text-lg font-bold hover:text-[#497c49] active:text-[#497c49]"
        >
          About
        </Link>
        <Link
          onClick={onClose}
          href="/contact"
          className="py-[1.25rem] text-brand-secondary border-b-[1px]  border-b-[rgba(0,0,0,0.2)] text-lg font-bold hover:text-[#497c49] active:text-[#497c49]"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
}
