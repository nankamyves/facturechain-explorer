interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-7 w-7" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FactureChain logo"
      role="img"
    >
      <defs>
        <linearGradient id="fc-mono-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#fc-mono-g)" />
      {/* F shape */}
      <path d="M14 10 H34 V16 H20 V22 H30 V28 H20 V38 H14 Z" fill="white" />
      {/* Chain link accents */}
      <circle cx="33" cy="25" r="4.5" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="38" cy="32" r="4.5" fill="none" stroke="white" strokeWidth="2" opacity="0.85" />
    </svg>
  );
};

export default Logo;
