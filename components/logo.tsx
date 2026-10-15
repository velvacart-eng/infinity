import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render the white-text variant for dark backgrounds (e.g. footer). */
  dark?: boolean;
  /** Show only the infinity icon, without the wordmark. */
  iconOnly?: boolean;
  /** On viewports below `sm`, show only the infinity icon to save header space. */
  iconOnMobile?: boolean;
}

export function Logo({
  className,
  dark = false,
  iconOnly = false,
  iconOnMobile = false,
}: LogoProps) {
  const iconSrc = "/images/logo-icon.png";
  const fullSrc = dark ? "/images/logo-full-white.png" : "/images/logo-full.png";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Infinity Techiez home"
    >
      {iconOnMobile ? (
        <>
          <Image
            src={iconSrc}
            alt="Infinity Techiez — Business IT Services"
            width={512}
            height={512}
            priority
            className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:hidden"
          />
          <Image
            src={fullSrc}
            alt=""
            width={1449}
            height={265}
            priority
            aria-hidden="true"
            className="hidden h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:block"
          />
        </>
      ) : (
        <Image
          src={iconOnly ? iconSrc : fullSrc}
          alt="Infinity Techiez — Business IT Services"
          width={iconOnly ? 512 : 1449}
          height={iconOnly ? 512 : 265}
          priority
          className={cn(
            "w-auto transition-transform duration-300 group-hover:scale-[1.02]",
            "h-11"
          )}
        />
      )}
    </Link>
  );
}
