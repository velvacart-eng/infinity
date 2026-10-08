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
        "inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-85",
        className
      )}
      aria-label="Infinity Techiez home"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy text-white shadow-sm"
        aria-hidden="true"
      >
        <svg
          width="18"
          height="18"
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
