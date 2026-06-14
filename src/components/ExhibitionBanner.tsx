import { Link } from "react-router-dom";

// Show through the end of the exhibition's final day (local time), then auto-hide.
const EVENT_END = new Date(2026, 5, 19, 23, 59, 59); // June 19, 2026

function isLive(): boolean {
  if (typeof window === "undefined") return false;
  return new Date() <= EVENT_END;
}

function IndiaFlag() {
  return (
    <svg viewBox="0 0 36 36" className="flagSvg" aria-hidden="true">
      <defs>
        <clipPath id="exFlagIndia">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
      </defs>
      <g clipPath="url(#exFlagIndia)">
        <rect width="36" height="12" fill="#FF9933" />
        <rect y="12" width="36" height="12" fill="#FFFFFF" />
        <rect y="24" width="36" height="12" fill="#138808" />
        <g stroke="#0A3D91" strokeWidth="0.7" fill="none">
          <circle cx="18" cy="18" r="4" />
          {[0, 45, 90, 135].map((a) => (
            <line key={a} x1="14" y1="18" x2="22" y2="18" transform={`rotate(${a} 18 18)`} />
          ))}
        </g>
        <circle cx="18" cy="18" r="1" fill="#0A3D91" />
      </g>
    </svg>
  );
}

function RussiaFlag() {
  return (
    <svg viewBox="0 0 36 36" className="flagSvg" aria-hidden="true">
      <defs>
        <clipPath id="exFlagRussia">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
      </defs>
      <g clipPath="url(#exFlagRussia)">
        <rect width="36" height="12" fill="#FFFFFF" />
        <rect y="12" width="36" height="12" fill="#0039A6" />
        <rect y="24" width="36" height="12" fill="#D52B1E" />
      </g>
    </svg>
  );
}

export function ExhibitionBanner() {
  if (!isLive()) return null;

  return (
    <div
      className="exhibitionCard"
      role="region"
      aria-label="Sankalp Textile at Technotextil, Moscow, June 16 to 19, 2026"
    >
      <span className="exhibitionGlow" aria-hidden="true" />

      {/* India → Russia journey */}
      <div className="exhibitionJourney" role="img" aria-label="Travelling from India to Russia">
        <span className="flagBadge">
          <IndiaFlag />
        </span>
        <span className="journeyPath" aria-hidden="true">
          <svg
            className="journeyPlane"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>
        </span>
        <span className="flagBadge">
          <RussiaFlag />
        </span>
      </div>

      <span className="exhibitionDivider" aria-hidden="true" />

      <div className="exhibitionBody">
        <span className="exhibitionEyebrow">
          <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path
              d="M6.5 0L7.9 4.6L12.5 6L7.9 7.4L6.5 12L5.1 7.4L0.5 6L5.1 4.6L6.5 0Z"
              fill="currentColor"
            />
          </svg>
          International Exhibition
        </span>

        <div className="exhibitionTitle">
          Meet us at <strong>Technotextil</strong>
        </div>

        <div className="exhibitionMeta">
          <span className="metaItem">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            Moscow, Russia
          </span>
          <span className="metaDot" aria-hidden="true" />
          <span className="metaItem">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M3 9H21M8 3V6M16 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            June 16 - 19, 2026
          </span>
        </div>
      </div>

      <Link to="/contact" className="exhibitionCta">
        Contact Us <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
