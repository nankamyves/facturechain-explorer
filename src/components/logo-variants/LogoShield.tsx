interface Props { className?: string }
const LogoShield = ({ className = "h-7 w-7" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-label="FactureChain bouclier" role="img">
    <defs>
      <linearGradient id="ls-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" />
      </linearGradient>
    </defs>
    <path d="M24 3 L42 9 V24 C42 34 34 42 24 45 C14 42 6 34 6 24 V9 Z" fill="url(#ls-g)" />
    {/* Lightning bolt */}
    <path d="M26 14 L17 28 H23 L21 38 L31 22 H25 Z" fill="white" />
    {/* Chain links bottom */}
    <circle cx="18" cy="36" r="2.5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" />
    <circle cx="30" cy="36" r="2.5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" />
  </svg>
);
export default LogoShield;
