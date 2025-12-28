import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Link to="/" className="brand footerBrandLink" aria-label="Go to homepage">
            <img src="images/logo.svg" alt="Company Logo" className="brandMark" />
          </Link>
          <p className="muted">
          We are serving society with a deep commitment to care and quality. Every meter we manufacture reflects our responsibility toward healthcare, where consistency, trust, and uncompromising standards guide everything we do.
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
          <a className="footerLink " href="tel:+917859953157">
            +91 7859953157
          </a>
          <div className="muted small">Mon–Sat · 9:00 AM – 6:00 PM</div>
          <div className="muted small">
            <a href="https://maps.app.goo.gl/3VtbFMingJXJovxe9" target="_blank" rel="noopener noreferrer">
              44, Girivar Glean, B/h Megma restaurant, S.P. ring road, Odhav, Ahmedabad - 382415, Gujarat, India.
            </a>
          </div>
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


