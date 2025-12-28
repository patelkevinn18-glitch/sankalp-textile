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
  >
    <svg
  className="footerIcon footerWhatsappIcon"
  viewBox="0 0 32 32"
  aria-hidden="true"
>
  <circle cx="16" cy="16" r="16" fill="#25D366" />

  <path
    fill="#ffffff"
    d="M19.11 17.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 
    1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.2 5.08 4.49.71.3 1.27.48 1.7.62.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"
  />
</svg>

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


