"use client";

import { Cloud, Database, Globe, Mail, Network, Server, Settings, Shield, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Globe,
  Server,
  Cloud,
  Network,
  Shield,
  Database,
  Settings,
};

interface ServiceHeroVisualProps {
  icon: string;
  title: string;
}

export function ServiceHeroVisual({ icon, title }: ServiceHeroVisualProps) {
  const Icon = iconMap[icon] || Settings;

  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-border/40 bg-card/60 p-6 shadow-sm md:p-10"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.08),transparent_50%)]" />

      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-full w-full">
        <defs>
          <linearGradient id="service-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(221 83% 53% / 0.5)" />
            <stop offset="100%" stopColor="hsl(217 91% 60% / 0.1)" />
          </linearGradient>
        </defs>

        {/* Fine grid */}
        <pattern id="service-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="hsl(220 43% 10% / 0.04)" strokeWidth="1" />
        </pattern>
        <rect width="400" height="300" fill="url(#service-grid)" />

        {/* Connection lines */}
        <g stroke="url(#service-line)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8">
          <path d="M200 150 L80 70" className="animate-pulse-soft" />
          <path d="M200 150 L320 70" className="animate-pulse-soft" style={{ animationDelay: "1s" }} />
          <path d="M200 150 L80 230" className="animate-pulse-soft" style={{ animationDelay: "2s" }} />
          <path d="M200 150 L320 230" className="animate-pulse-soft" style={{ animationDelay: "3s" }} />
        </g>

        {/* Satellite nodes */}
        <g className="animate-float" style={{ transformOrigin: "80px 70px", animationDelay: "1s" }}>
          <circle cx="80" cy="70" r="22" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <circle cx="80" cy="70" r="6" fill="hsl(221 83% 53% / 0.15)" stroke="hsl(221 83% 53%)" strokeWidth="1.5" />
        </g>
        <g className="animate-float" style={{ transformOrigin: "320px 70px", animationDelay: "1.5s" }}>
          <rect x="302" y="52" width="36" height="36" rx="8" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <path d="M314 64 L326 76 M314 76 L326 64" stroke="hsl(221 83% 53%)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g className="animate-float" style={{ transformOrigin: "80px 230px", animationDelay: "2s" }}>
          <rect x="58" y="208" width="44" height="44" rx="22" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <path d="M74 230 L86 230 M80 224 L80 236" stroke="hsl(221 83% 53%)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g className="animate-float" style={{ transformOrigin: "320px 230px", animationDelay: "2.5s" }}>
          <circle cx="320" cy="230" r="22" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <path d="M310 230 L330 230 M318 224 L324 230 L318 236" stroke="hsl(221 83% 53%)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Center panel */}
        <g className="animate-float" style={{ transformOrigin: "200px 150px" }}>
          <circle cx="200" cy="150" r="58" fill="hsl(221 83% 53% / 0.08)" stroke="hsl(221 83% 53% / 0.3)" strokeWidth="1.5" />
          <circle cx="200" cy="150" r="40" fill="hsl(220 43% 10%)" />
          <foreignObject x="176" y="126" width="48" height="48">
            <div className="flex h-full w-full items-center justify-center text-white">
              <Icon className="h-7 w-7" />
            </div>
          </foreignObject>
        </g>

        {/* Service title */}
        <text
          x="200"
          y="270"
          textAnchor="middle"
          fill="hsl(220 43% 10%)"
          fontSize="12"
          fontWeight="600"
          letterSpacing="0.06em"
        >
          {title}
        </text>
      </svg>
    </div>
  );
}
