type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title = "Sankalp Textile" }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="st-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3e9fd6" />
          <stop offset="1" stopColor="#020234" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="44" height="44" rx="14" fill="url(#st-blue)" />
      <path
        d="M18 20c6-6 14-6 20 0M18 28c6-6 14-6 20 0M18 36c6-6 14-6 20 0"
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}


