interface Props { className?: string }
const LogoMeter = ({ className = "h-7 w-7" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-label="FactureChain compteur blockchain" role="img">
    <defs>
      <linearGradient id="lmt-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--primary) / 0.85)" />
      </linearGradient>
    </defs>
    {/* Meter body */}
    <rect x="6" y="6" width="36" height="36" rx="6" fill="url(#lmt-g)" />
    {/* Display screen */}
    <rect x="11" y="12" width="26" height="11" rx="2" fill="hsl(var(--background))" />
    {/* Block digits */}
    <rect x="13" y="15" width="4" height="5" fill="hsl(var(--secondary))" />
    <rect x="18" y="15" width="4" height="5" fill="hsl(var(--secondary))" opacity="0.85" />
    <rect x="23" y="15" width="4" height="5" fill="hsl(var(--secondary))" opacity="0.7" />
    <rect x="28" y="15" width="4" height="5" fill="hsl(var(--secondary))" opacity="0.55" />
    {/* Connecting chain dots */}
    <circle cx="15" cy="30" r="2" fill="white" />
    <circle cx="24" cy="30" r="2" fill="white" />
    <circle cx="33" cy="30" r="2" fill="white" />
    <path d="M15 30 H33" stroke="white" strokeWidth="1.2" />
    {/* Lightning */}
    <path d="M22 34 L19 40 H23 L21 44 L27 38 H24 L26 34 Z" fill="hsl(var(--secondary))" />
  </svg>
);
export default LogoMeter;
