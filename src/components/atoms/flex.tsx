// components/ui/Flex.tsx

import { ReactNode } from "react";
import { cn } from "src/utils/tailwind.utils";

type FlexProps = {
  children: ReactNode;
  className?: string;

  direction?: "row" | "col";
  justify?:
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

  align?: "start" | "center" | "end" | "stretch";
  gap?: number;
  wrap?: boolean;
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export function Flex({
  children,
  className,

  direction = "row",
  justify = "start",
  align = "start",
  gap = 4,
  wrap = false,
}: FlexProps) {
  return (
    <div
      className={cn(
        "flex",

        direction === "row" ? "flex-row" : "flex-col",

        justifyMap[justify],
        alignMap[align],

        wrap && "flex-wrap",

        `gap-${gap}`,

        className
      )}
    >
      {children}
    </div>
  );
}