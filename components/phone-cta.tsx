import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/config";
import { trackingEvents } from "@/lib/tracking";
import { cn } from "@/lib/utils";

interface PhoneCTAProps {
  size?: "default" | "lg";
  className?: string;
}

/** Primary call-to-action that opens the phone dialer and counts as a call lead. */
export function PhoneCTA({ size = "default", className }: PhoneCTAProps) {
  if (!businessInfo.phone) return null;

  return (
    <Button
      asChild
      size={size}
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "border-0 bg-gradient-to-r from-primary via-brand-violet to-primary bg-[length:200%_100%] text-white hover:bg-right",
        size === "lg" && "h-12 px-8 text-base",
        className
      )}
    >
      <a
        href={`tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`}
        data-conversion={trackingEvents.phoneCallClick}
      >
        <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
        <span className="relative z-10">Call {businessInfo.phone}</span>
      </a>
    </Button>
  );
}
