import Link from "next/link";
import { ArrowRight } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
  size?: "md" | "lg";
}

export function ButtonLink({
  href,
  children,
  className,
  arrow = true,
  size = "md",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md",
        "bg-gradient-to-b from-(color:--color-brand-400) to-(color:--color-brand-700) font-medium text-white shadow-(--shadow-glow)",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(220,58,31,0.7)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-(color:--color-brand)/30",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-[15px]",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      {arrow ? (
        <ArrowRight
          className="relative z-10 h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      ) : null}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </Link>
  );
}
