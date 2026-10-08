export function ServiceEcosystemVisual() {
  return (
    <div
      className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border/40 bg-card/60 p-6 shadow-sm md:p-8"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(37,99,235,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent_55%)]" />
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-full w-full">
        <defs>
          <linearGradient id="eco-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(221 83% 53% / 0.5)" />
            <stop offset="100%" stopColor="hsl(217 91% 60% / 0.15)" />
          </linearGradient>
        </defs>

        {/* Fine grid */}
        <pattern id="eco-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="hsl(220 43% 10% / 0.04)" strokeWidth="1" />
        </pattern>
        <rect width="400" height="400" fill="url(#eco-grid)" />

        {/* Connecting lines */}
        <g stroke="url(#eco-line)" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M200 200 L100 100" className="animate-pulse-soft" />
          <path d="M200 200 L300 100" className="animate-pulse-soft" style={{ animationDelay: "0.8s" }} />
          <path d="M200 200 L100 300" className="animate-pulse-soft" style={{ animationDelay: "1.6s" }} />
          <path d="M200 200 L300 300" className="animate-pulse-soft" style={{ animationDelay: "2.4s" }} />
          <path d="M200 200 L200 60" className="animate-pulse-soft" style={{ animationDelay: "3.2s" }} />
        </g>

        {/* Center hub */}
        <g className="animate-float" style={{ transformOrigin: "200px 200px" }}>
          <circle cx="200" cy="200" r="48" fill="hsl(221 83% 53% / 0.08)" stroke="hsl(221 83% 53% / 0.35)" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="32" fill="hsl(220 43% 10%)" />
          <text x="200" y="206" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" letterSpacing="0.04em">
            BUSINESS
          </text>
        </g>

        {/* Satellites */}
        <g className="animate-float" style={{ transformOrigin: "100px 100px", animationDelay: "1s" }}>
          <circle cx="100" cy="100" r="34" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <text x="100" y="95" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="10" fontWeight="600">Communication</text>
          <text x="100" y="110" textAnchor="middle" fill="hsl(215 18% 38%)" fontSize="8">Email · Domains</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "300px 100px", animationDelay: "1.8s" }}>
          <circle cx="300" cy="100" r="34" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <text x="300" y="95" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="10" fontWeight="600">Infrastructure</text>
          <text x="300" y="110" textAnchor="middle" fill="hsl(215 18% 38%)" fontSize="8">Servers · Network</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "100px 300px", animationDelay: "2.2s" }}>
          <circle cx="100" cy="300" r="34" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <text x="100" y="295" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="10" fontWeight="600">Cloud</text>
          <text x="100" y="310" textAnchor="middle" fill="hsl(215 18% 38%)" fontSize="8">Hosting · SaaS</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "300px 300px", animationDelay: "2.8s" }}>
          <circle cx="300" cy="300" r="34" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <text x="300" y="295" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="10" fontWeight="600">Security</text>
          <text x="300" y="310" textAnchor="middle" fill="hsl(215 18% 38%)" fontSize="8">Identity · Backup</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "200px 60px", animationDelay: "3.4s" }}>
          <rect x="155" y="42" width="90" height="36" rx="18" fill="white" stroke="hsl(221 83% 53% / 0.25)" strokeWidth="1.5" />
          <text x="200" y="66" textAnchor="middle" fill="hsl(220 43% 10%)" fontSize="10" fontWeight="600">Continuity</text>
        </g>
      </svg>
    </div>
  );
}
