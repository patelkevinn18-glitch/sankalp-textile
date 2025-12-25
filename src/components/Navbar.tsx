import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BrandMark } from "./BrandMark";

type NavItem = {
  to: string;
  label: string;
};

export function Navbar() {
  const location = useLocation();
  const [is_menu_open, setIsMenuOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/products", label: "Products" },
      { to: "/quality", label: "Quality" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!is_menu_open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [is_menu_open]);

  return (
    <>
      <header className="siteHeader">
        <div className="container headerInner">
          <Link to="/" className="brand" aria-label="Go to homepage">
            <BrandMark className="brandMark" />
            <div className="brandText">
              <span className="brandName">Sankalp Textile</span>
              <span className="brandTag">Premium Quality Leno Gauze</span>
            </div>
          </Link>

          <nav className="navDesktop" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => ["navLink", isActive ? "isActive" : ""].filter(Boolean).join(" ")}
              >
                {item.label}
              </NavLink>
            ))}
            {/* <Link to="/contact" className="btn btnPrimary">
            Get a Quote
          </Link> */}
        </nav>

          <button
            type="button"
            className="navToggle"
            onClick={handleToggleMenu}
            aria-label={is_menu_open ? "Close menu" : "Open menu"}
            aria-expanded={is_menu_open}
            aria-controls="mobileMenu"
          >
            <span className="navToggleIcon" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={["mobileOverlay", is_menu_open ? "isOpen" : ""].filter(Boolean).join(" ")}>
        <button
          type="button"
          className="mobileBackdrop"
          onClick={handleCloseMenu}
          aria-label="Close menu overlay"
        />
        <div id="mobileMenu" className="mobileSheet" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobileHeader">
            <span className="mobileTitle">Menu</span>
            <button
              type="button"
              className="btn btnGhost"
              onClick={handleCloseMenu}
              aria-label="Close menu"
              title="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mobileLinks" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => ["mobileLink", isActive ? "isActive" : ""].filter(Boolean).join(" ")}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mobileCta">
            <Link to="/contact" className="btn btnPrimary btnFull">
              Request a Quote
            </Link>
            <p className="muted small">
              Fast response for bulk orders & custom specifications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


