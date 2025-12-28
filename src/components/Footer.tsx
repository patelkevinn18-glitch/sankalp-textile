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
    <svg className="footerIcon footerWhatsappIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12.04 2C6.48 2 2 6.48 2 12.02c0 2.11.55 4.07 1.6 5.84L4 22l4.37-1.15c1.69.92 3.6 1.15 5.67.15C20 19 22 15 22 12.02 22 6.48 17.52 2 12.04 2zm4.4 12.9c-.22.6-1.3 1.23-1.76 1.32-.45.09-.99.13-1.82-.17-1.69-.47-3.01-1.86-3.51-2.28-.5-.43-.84-.88-.95-1.16-.11-.27-.02-.53.2-.7.21-.17.46-.44.68-.67.22-.23.29-.39.44-.59.15-.2.07-.38 0-.52-.07-.14-.6-1.45-.82-1.98-.22-.52-.44-.46-.6-.46h-.46c-.16 0-.41.06-.72.36-.31.31-1.2 1.04-1.2 2.52 0 1.48 1 3.16 1.15 3.39.15.23 1.82 2.95 4.6 4.34 2.08 1.06 2.97 1.09 3.24 1.03.27-.06 1.34-.54 1.53-1.06.2-.52.2-1.05.14-1.16-.06-.12-.2-.2-.38-.34z" />
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


