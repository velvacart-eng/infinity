import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render the white-text variant for dark backgrounds (e.g. footer). */
  dark?: boolean;
  /** Show only the infinity icon, without the wordmark. */
  iconOnly?: boolean;
}

export function Logo({ className, dark = false, iconOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Infinity Techiez home"
    >
      <Image
        src={
          iconOnly
            ? "/images/logo-icon.png"
            : dark
              ? "/images/logo-full-white.png"
              : "/images/logo-full.png"
        }
        alt="Infinity Techiez — Business IT Services"
        width={iconOnly ? 512 : 1449}
        height={iconOnly ? 512 : 265}
        priority
        className={cn(
          "w-auto transition-transform duration-300 group-hover:scale-[1.02]",
          "h-11"
        )}
      />
    </Link>
  );
}
