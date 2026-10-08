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
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        variant === "default" &&
          "border-0 bg-gradient-to-r from-primary via-brand-violet to-primary bg-[length:200%_100%] text-white hover:bg-right",
        variant === "outline" &&
          "border-2 border-primary/20 bg-transparent text-primary hover:border-primary hover:bg-primary/5",
        variant === "secondary" &&
          "bg-brand-accent-soft text-primary hover:bg-brand-accent-soft/80",
        size === "lg" && "h-12 px-8 text-base",
        className
      )}
    >
      <Link href={href}>
        <span className="relative z-10">{children}</span>
        {showArrow && (
          <ArrowRight
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </Link>
    </Button>
  );
}
