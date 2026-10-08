export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-xl border bg-white p-6 shadow-sm md:p-10"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 640 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(220 18% 16% / 0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="640" height="360" fill="url(#hero-grid)" />

        <g stroke="hsl(220 18% 16% / 0.12)" strokeWidth="1.5" fill="none">
          <path d="M120 260 L220 180 L320 220 L420 160 L520 200" />
          <path d="M220 180 L320 120 L420 160" />
          <path d="M320 220 L320 280" />
          <path d="M120 260 L120 120 L220 180" />
          <path d="M520 200 L520 280 L420 160" />
        </g>

        <g transform="translate(290, 95)">
          <rect x="0" y="0" width="60" height="40" rx="20" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.35)" strokeWidth="1.5" />
          <path d="M18 26h24M22 20h16M26 14h8" stroke="hsl(220 18% 16% / 0.55)" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="translate(80, 100)">
          <rect x="0" y="0" width="44" height="34" rx="6" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.3)" strokeWidth="1.5" />
          <path d="M6 10l16 11 16-11" stroke="hsl(220 18% 16% / 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g transform="translate(190, 150)">
          <rect x="0" y="0" width="40" height="52" rx="6" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.3)" strokeWidth="1.5" />
          <circle cx="10" cy="14" r="2.5" fill="hsl(205 65% 40%)" />
          <path d="M18 13h14" stroke="hsl(220 18% 16% / 0.35)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="10" cy="26" r="2.5" fill="hsl(220 18% 16% / 0.3)" />
          <path d="M18 25h14" stroke="hsl(220 18% 16% / 0.35)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="10" cy="38" r="2.5" fill="hsl(220 18% 16% / 0.3)" />
          <path d="M18 37h14" stroke="hsl(220 18% 16% / 0.35)" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        <g transform="translate(290, 235)">
          <rect x="0" y="0" width="44" height="44" rx="22" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.35)" strokeWidth="1.5" />
          <path d="M22 12v10M16 18l6-6 6 6" stroke="hsl(220 18% 16% / 0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="26" width="16" height="8" rx="2" fill="hsl(205 65% 40% / 0.2)" />
        </g>

        <g transform="translate(390, 135)">
          <rect x="0" y="0" width="48" height="40" rx="6" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.3)" strokeWidth="1.5" />
          <circle cx="24" cy="18" r="7" stroke="hsl(220 18% 16% / 0.45)" strokeWidth="1.5" />
          <path d="M17 18h14M24 11v14" stroke="hsl(220 18% 16% / 0.45)" strokeWidth="1.5" />
          <path d="M8 34h32" stroke="hsl(220 18% 16% / 0.25)" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        <g transform="translate(490, 180)">
          <rect x="0" y="0" width="44" height="44" rx="6" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.3)" strokeWidth="1.5" />
          <ellipse cx="22" cy="14" rx="12" ry="5" stroke="hsl(220 18% 16% / 0.45)" strokeWidth="1.5" />
          <path d="M10 14v12c0 3 5.4 5 12 5s12-2 12-5V14" stroke="hsl(220 18% 16% / 0.45)" strokeWidth="1.5" />
        </g>

        <g transform="translate(80, 250)">
          <rect x="0" y="0" width="50" height="34" rx="5" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.3)" strokeWidth="1.5" />
          <rect x="6" y="6" width="38" height="16" rx="2" fill="hsl(220 18% 16% / 0.06)" />
          <path d="M18 26h14" stroke="hsl(220 18% 16% / 0.35)" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        <g transform="translate(495, 265)">
          <rect x="0" y="0" width="34" height="50" rx="5" fill="hsl(220 18% 16% / 0.04)" stroke="hsl(220 18% 16% / 0.3)" strokeWidth="1.5" />
          <circle cx="17" cy="16" r="4" stroke="hsl(220 18% 16% / 0.45)" strokeWidth="1.5" />
          <path d="M9 36h16" stroke="hsl(220 18% 16% / 0.35)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
