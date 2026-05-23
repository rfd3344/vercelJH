// components/ui/Accordion.tsx

"use client";

import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({
  items,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="
              border-b border-gray-100
              last:border-b-0
            "
          >
            <button
              onClick={() => toggle(index)}
              className="
                flex w-full items-center justify-between
                px-5 py-4
                text-left
                transition
                bg-gray-50
              "
            >
              <span className="text-sm font-semibold text-gray-900">
                {item.title}
              </span>

              <ChevronDown
                className={`
                  h-5 w-5 text-gray-500 transition-transform duration-200
                  ${isOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            <div
              className={`
                grid transition-all duration-300 ease-in-out
                ${isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-6 text-gray-600">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}