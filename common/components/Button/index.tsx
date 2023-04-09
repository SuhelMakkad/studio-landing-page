import React, { HTMLAttributeAnchorTarget } from "react";

import Link from "next/link";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva(
  [
    "font-semibold",
    "text-center",
    "rounded",
    "px-[0.75em]",
    "py-[0.25em]",
    "whitespace-nowrap",
    "transition-transform",
    "hover:-translate-y-1",
    "focus-visible:outline-red-500",
    "focus-visible:-translate-y-1",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-stone-100", "hover:bg-stone-100/80", "text-black"],
        outline: [
          "bg-transparent",
          "text-blue-600",
          "outline",
          "outline-red-300",
        ],
      },
      size: {
        small: ["text-sm"],
        medium: ["text-base"],
        large: ["text-lg"],
      },
      uppercase: {
        true: "uppercase",
      },

      elevated: {
        true: [
          "hover:-translate-y-0.5",
          "active:translate-y-px",
          "hover:drop-shadow-xl",
          "active:drop-shadow-md",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonOrLinkProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof button> {
  href?: string;
  className?: string;
  children?: JSX.Element | string;
  target?: HTMLAttributeAnchorTarget | undefined;
}

const Button = ({
  children,
  intent,
  size,
  uppercase,
  elevated,
  href,
  className,
  ...props
}: ButtonOrLinkProps) => {
  const buttonClass = `${button({
    intent,
    size,
    uppercase,
    elevated,
  })} ${className}`;

  if (href) {
    return (
      <Link {...props} href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
