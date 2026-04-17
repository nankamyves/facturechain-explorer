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
        <linearGradient id="fc-doc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.85)" />
        </linearGradient>
        <linearGradient id="fc-link" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary) / 0.8)" />
        </linearGradient>
      </defs>

      {/* Document with folded corner */}
      <path
        d="M8 6 H28 L40 18 V40 a4 4 0 0 1 -4 4 H8 a4 4 0 0 1 -4 -4 V10 a4 4 0 0 1 4 -4 z"
        fill="url(#fc-doc)"
      />
      {/* Folded corner highlight */}
      <path
        d="M28 6 V14 a4 4 0 0 0 4 4 H40 Z"
        fill="hsl(var(--primary) / 0.55)"
      />

      {/* Invoice lines */}
      <rect x="10" y="20" width="16" height="2.5" rx="1.25" fill="white" opacity="0.95" />
      <rect x="10" y="26" width="22" height="2.5" rx="1.25" fill="white" opacity="0.85" />
      <rect x="10" y="32" width="18" height="2.5" rx="1.25" fill="white" opacity="0.7" />

      {/* Chain links badge */}
      <g transform="translate(28 26)">
        <circle cx="8" cy="8" r="9" fill="hsl(var(--background))" />
        <path
          d="M3.5 8 a3 3 0 0 1 3 -3 h2 M12.5 8 a3 3 0 0 1 -3 3 h-2"
          stroke="url(#fc-link)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M6 8 h4"
          stroke="url(#fc-link)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Logo;
