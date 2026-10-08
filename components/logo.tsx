import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-[1.05rem] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80",
        className
      )}
      aria-label="Infinity Techiez home"
    >
      <span
        className="flex h-7 w-7 items-center justify-center rounded border border-current/15 bg-brand-navy text-white"
        aria-hidden="true"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v18" />
          <path d="M6 8l12-4" />
          <path d="M6 16l12 4" />
        </svg>
      </span>
      <span>Infinity Techiez</span>
    </Link>
  );
}
