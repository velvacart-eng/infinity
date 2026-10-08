export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl border border-border/40 bg-card/60 p-6 shadow-sm backdrop-blur-sm md:aspect-[16/12] md:p-10"
      aria-hidden="true"
    >
      {/* Soft ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08),transparent_50%)]" />

      <svg
        viewBox="0 0 560 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(221 83% 53% / 0.45)" />
            <stop offset="100%" stopColor="hsl(217 91% 60% / 0.15)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fine grid */}
        <pattern id="modern-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(220 43% 10% / 0.04)" strokeWidth="1" />
        </pattern>
        <rect width="560" height="420" fill="url(#modern-grid)" />

        {/* Connection lines */}
        <g stroke="url(#line-gradient)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9">
          {/* Center hub to satellites */}
          <path d="M280 210 L120 120" className="animate-pulse-soft" />
          <path d="M280 210 L440 120" className="animate-pulse-soft" style={{ animationDelay: "1s" }} />
          <path d="M280 210 L120 300" className="animate-pulse-soft" style={{ animationDelay: "2s" }} />
          <path d="M280 210 L440 300" className="animate-pulse-soft" style={{ animationDelay: "3s" }} />
          <path d="M280 210 L280 90" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
          <path d="M280 210 L280 330" className="animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
          {/* Cross links */}
          <path d="M120 120 L120 300" opacity="0.5" />
          <path d="M440 120 L440 300" opacity="0.5" />
          <path d="M120 120 L440 120" opacity="0.3" />
          <path d="M120 300 L440 300" opacity="0.3" />
        </g>

        {/* Floating node — Business (center) */}
        <g className="animate-float" style={{ transformOrigin: "280px 210px" }}>
          <circle cx="280" cy="210" r="44" fill="hsl(221 83% 53% / 0.08)" stroke="hsl(221 83% 53% / 0.35)" strokeWidth="1.5" />
          <circle cx="280" cy="210" r="30" fill="hsl(220 43% 10%)" />
          <text x="280" y="216" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" letterSpacing="0.04em">BUSINESS</text>
        </g>

        {/* Satellite nodes */}
        <g className="animate-float" style={{ transformOrigin: "120px 120px", animationDelay: "1s" }}>
          <rect x="80" y="92" width="80" height="56" rx="12" fill="hsl(0 0% 100%)" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <path d="M105 118 L135 118" stroke="hsl(221 83% 53%)" strokeWidth="2" strokeLinecap="round" />
          <path d="M105 128 L125 128" stroke="hsl(220 43% 10% / 0.25)" strokeWidth="2" strokeLinecap="round" />
          <text x="120" y="112" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="9" fontWeight="600">Email</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "440px 120px", animationDelay: "2s" }}>
          <rect x="400" y="92" width="80" height="56" rx="12" fill="hsl(0 0% 100%)" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <circle cx="425" cy="120" r="5" stroke="hsl(221 83% 53%)" strokeWidth="2" />
          <circle cx="440" cy="120" r="5" stroke="hsl(220 43% 10% / 0.25)" strokeWidth="2" />
          <circle cx="455" cy="120" r="5" stroke="hsl(220 43% 10% / 0.25)" strokeWidth="2" />
          <text x="440" y="112" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="9" fontWeight="600">Security</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "120px 300px", animationDelay: "1.5s" }}>
          <rect x="80" y="272" width="80" height="56" rx="12" fill="hsl(0 0% 100%)" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <rect x="100" y="290" width="40" height="20" rx="3" stroke="hsl(221 83% 53%)" strokeWidth="1.5" />
          <path d="M105 306 L135 306" stroke="hsl(220 43% 10% / 0.25)" strokeWidth="1.5" />
          <text x="120" y="286" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="9" fontWeight="600">Hosting</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "440px 300px", animationDelay: "0.5s" }}>
          <rect x="400" y="272" width="80" height="56" rx="12" fill="hsl(0 0% 100%)" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <path d="M425 300 L425 314 M425 300 L435 308 M425 300 L415 308" stroke="hsl(221 83% 53%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M425 318 L425 328" stroke="hsl(220 43% 10% / 0.25)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="440" y="286" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="9" fontWeight="600">Backup</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "280px 90px", animationDelay: "2.5s" }}>
          <rect x="245" y="55" width="70" height="46" rx="10" fill="hsl(0 0% 100%)" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <path d="M268 76 L280 66 L292 76" stroke="hsl(221 83% 53%)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="280" y="87" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="8" fontWeight="600">Cloud</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "280px 330px", animationDelay: "3s" }}>
          <rect x="245" y="310" width="70" height="46" rx="10" fill="hsl(0 0% 100%)" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <rect x="262" y="320" width="36" height="20" rx="3" stroke="hsl(221 83% 53%)" strokeWidth="1.5" />
          <path d="M270 330 L290 330 M268 335 L292 335" stroke="hsl(220 43% 10% / 0.25)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="280" y="342" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="8" fontWeight="600">Infrastructure</text>
        </g>
      </svg>
    </div>
  );
}
