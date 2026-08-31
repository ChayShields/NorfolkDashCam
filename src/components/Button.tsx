import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] transition-transform duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-yellow active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-safety-yellow text-asphalt shadow-[0_4px_0_0_var(--color-safety-yellow-dim)] hover:brightness-105 hover:-translate-y-0.5",
  outline:
    "border-2 border-safety-yellow text-safety-yellow hover:bg-safety-yellow hover:text-asphalt",
};

export default function Button({
  href,
  variant = "primary",
  external = false,
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
