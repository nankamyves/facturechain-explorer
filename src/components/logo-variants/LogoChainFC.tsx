interface Props { className?: string }
const LogoChainFC = ({ className = "h-7 w-7" }: Props) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-label="FactureChain maillons FC" role="img">
    <defs>
      <linearGradient id="lc-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" />
      </linearGradient>
    </defs>
    {/* F as open chain link (rectangular) */}
    <path d="M8 10 h14 a4 4 0 0 1 4 4 v4 h-6 v-2 h-6 v6 h8 v6 h-8 v10 h-6 z" fill="url(#lc-g)" />
    {/* C as circular chain link interlocked */}
    <path d="M40 24 a12 12 0 1 1 -12 -12" stroke="url(#lc-g)" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="40" cy="24" r="2.5" fill="hsl(var(--secondary))" />
  </svg>
);
export default LogoChainFC;
