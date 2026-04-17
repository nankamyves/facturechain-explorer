interface Props { className?: string }
const LogoBoltLedger = ({ className = "h-7 w-7" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-label="FactureChain éclair ledger" role="img">
    <defs>
      <linearGradient id="lbl-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" />
      </linearGradient>
    </defs>
    {/* 3 stacked blocks */}
    <rect x="8" y="8" width="32" height="9" rx="2" fill="hsl(var(--primary))" opacity="0.85" />
    <rect x="8" y="19.5" width="32" height="9" rx="2" fill="hsl(var(--primary))" />
    <rect x="8" y="31" width="32" height="9" rx="2" fill="hsl(var(--secondary))" />
    {/* Lightning slicing through */}
    <path d="M28 4 L14 26 H22 L18 44 L34 20 H26 L30 4 Z" fill="url(#lbl-g)" stroke="hsl(var(--background))" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
export default LogoBoltLedger;
