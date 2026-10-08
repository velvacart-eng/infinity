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
        className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-brand-accent-bright to-brand-violet text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_-6px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]"
        aria-hidden="true"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-md"
        >
          <path d="M12 3v18" />
          <path d="M6 8l12-4" />
          <path d="M6 16l12 4" />
        </svg>
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/25 via-transparent to-transparent opacity-60" />
        <span className="absolute -bottom-1 left-1 right-1 h-2 rounded-full bg-black/20 blur-sm" />
      </span>
      <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
        Infinity Techiez
      </span>
    </Link>
  );
}
