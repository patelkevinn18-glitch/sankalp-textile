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
         <div className="footerLinks">
  {/* Email */}
  <a
    className="footerLink"
    href="mailto:contact@sankalptextile.com?subject=Inquiry%20from%20Website"
  >
    <svg className="footerIcon" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
      1.1.9 2 2 2h16c1.1 0 
      2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
      4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
    contact@sankalptextile.com
  </a>

  {/* Phone */}
  <a className="footerLink" href="tel:+919558551023">
    <svg className="footerIcon" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.05 15.05 
      0 006.59 6.59l2.2-2.2a1 
      1 0 011.01-.24c1.12.37 
      2.33.57 3.58.57a1 
      1 0 011 1v3.5a1 
      1 0 01-1 1C10.85 
      22 2 13.15 2 
      3.5a1 1 0 011-1H6.5a1 
      1 0 011 1c0 
      1.25.2 2.46.57 
      3.59a1 1 0 01-.25 
      1.01l-2.2 2.19z" />
    </svg>
    +91 9558551023
  </a>

  {/* WhatsApp */}
  <a
    className="footerLink whatsapp"
    href="https://wa.me/917859953157?text=Hello%20Sankalp%20Textile,%20I%20would%20like%20to%20inquire%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <img src="images/whatsapp.png" alt="WhatsApp Icon" className="footerIcon" />

     +91 7859953157
  </a>
</div>
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


