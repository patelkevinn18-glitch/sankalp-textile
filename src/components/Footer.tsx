import { Link } from "react-router-dom";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Link to="/" className="brand footerBrandLink" aria-label="Go to homepage">
            <BrandMark className="brandMark" />
            <div className="brandText">
              <span className="brandName">Sankalp Textile</span>
              <span className="brandTag">Premium Quality Leno Gauze</span>
            </div>
          </Link>
          <p className="muted">
            We manufacture breathable, durable leno gauze engineered for consistent quality, reliable lead
            times, and clear specifications.
          </p>
        </div>

        <div className="footerCol">
          <div className="footerHeading">Company</div>
          <Link className="footerLink" to="/about">
            About
          </Link>
          <Link className="footerLink" to="/quality">
            Quality
          </Link>
          <Link className="footerLink" to="/contact">
            Contact
          </Link>
        </div>

        <div className="footerCol">
          <div className="footerHeading">Products</div>
          <Link className="footerLink" to="/products">
            Leno Gauze
          </Link>
          <Link className="footerLink" to="/products#applications">
            Applications
          </Link>
          <Link className="footerLink" to="/products#specs">
            Specifications
          </Link>
        </div>

        <div className="footerCol">
          <div className="footerHeading">Get in touch</div>
          <a className="footerLink" href="mailto:contact@sankalptextile.com">
            contact@sankalptextile.com
          </a>
          <a className="footerLink" href="tel:+919558551023">
            +91 9558551023
          </a>
          <div className="muted small">Mon–Sat · 9:00 AM – 6:00 PM</div>
        </div>
      </div>

      <div className="container footerBottom">
        <span className="muted small">
          © {new Date().getFullYear()} Sankalp Textile. All rights reserved.
        </span>
      </div>
    </footer>
  );
}


