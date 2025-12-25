import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export function NotFoundPage() {
  return (
    <div className="page">
      <section className="pageHero">
        <div className="container">
          <Reveal>
            <h1 className="pageTitle">Page not found</h1>
            <p className="pageLead">The page you’re looking for doesn’t exist or has moved.</p>
            <div className="inlineActions">
              <Link to="/" className="btn btnPrimary">
                Go Home
              </Link>
              <Link to="/contact" className="btn btnGhost">
                Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


