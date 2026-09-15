"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need a visa to travel to Saudi Arabia as a tourist?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I use a tourist visa to come to work in Saudi Arabia?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question:
      "Do I need medical insurance so I can apply for a Saudi tourist visa?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleItem(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className=" max-w-[1400px] mx-auto px-[8.125rem] flex flex-col gap-4 max-xl:px-[5rem] max-sm:px-[2rem]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-[#f5f5f8] rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full flex items-center gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[#5a9a5a] flex-shrink-0">
                {isOpen ? <Minus size={22} /> : <Plus size={22} />}
              </span>
              <span className="w-px self-stretch bg-gray-300" />
              <span className="font-semibold text-gray-900">
                {faq.question}
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pl-[3.75rem] text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
