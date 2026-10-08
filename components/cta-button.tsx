import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "lg";
  className?: string;
  showArrow?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "default",
  size = "default",
  className,
  showArrow = false,
}: CTAButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        "group inline-flex items-center gap-2 transition-colors",
        className
      )}
    >
      <Link href={href}>
        {children}
        {showArrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </Link>
    </Button>
  );
}
