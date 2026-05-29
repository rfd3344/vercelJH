"use client";
import { ReactNode, useState, useEffect } from "react";

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
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    setOpenIndex(parseInt(hash.replace("accordion-", "")));

  }, [items]);

  const toggle = (index: number) => {

    const isOpen = openIndex === index;

    if (isOpen) {
      setOpenIndex(-1);

    } else {
      setOpenIndex(index);
      window.history.replaceState(null, "", "#accordion-" + index);
    }
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

              <span>{isOpen ? "▼" : "▶"}</span>
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
                  {isOpen && item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}