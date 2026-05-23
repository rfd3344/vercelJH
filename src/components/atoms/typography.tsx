
import { cn } from "src/utils/tailwind.utils";
import { ElementType, ReactNode } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "caption"
  | "muted"
  | "lead"
  | "blockquote"
  | "code";

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",

  body: "leading-7 text-base",
  "body-sm": "leading-6 text-sm",

  lead: "text-xl text-muted-foreground",
  muted: "text-sm text-muted-foreground",
  caption: "text-xs text-muted-foreground",

  blockquote: "border-l-2 pl-6 italic text-muted-foreground",

  code:
    "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
};

export function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = as || defaultElementMap[variant] || "p";

  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

const defaultElementMap: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",

  body: "p",
  "body-sm": "p",

  lead: "p",
  muted: "p",
  caption: "span",

  blockquote: "blockquote",

  code: "code",
};