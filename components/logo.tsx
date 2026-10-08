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
        "group inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Infinity Techiez home"
    >
      <span
        className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-brand-violet text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v18" />
          <path d="M6 8l12-4" />
          <path d="M6 16l12 4" />
        </svg>
        <span className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span>Infinity Techiez</span>
    </Link>
  );
}
