import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { siteImages } from "../content/siteImages";

export function ProductsPage() {
  return (
    <div className="page">
      <section className="pageHero">
        <div className="container">
          <Reveal>
            <h1 className="pageTitle">Premium Quality Leno Gauze</h1>
            <p className="pageLead">
              Leno gauze offers an open weave structure that helps maintain stability while keeping the
              fabric breathable and lightweight.
            </p>
            <div className="inlineActions">
              <Link to="/contact" className="btn btnPrimary">
                Request a Quote
              </Link>
              <Link to="/quality" className="btn btnGhost">
                Quality Standards
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid2">
          <Reveal className="imageCard">
              <ResponsiveImage
                src={siteImages.inspection.src}
                alt={siteImages.inspection.alt}
                className="image"
                width={2400}
                height={1600}
                sizes="(max-width: 720px) 100vw, 50vw"
              />
              <div className="imageCaption">Breathable open weave</div>
            </Reveal>
            <Reveal className="imageCard">
              <ResponsiveImage
                src={siteImages.rolls.src}
                alt={siteImages.rolls.alt}
                className="image"
                width={2400}
                height={1600}
                sizes="(max-width: 720px) 100vw, 50vw"
              />
              <div className="imageCaption">Production-ready rolls</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sectionHead">
              <h2 className="sectionTitle">Key characteristics</h2>
              <p className="sectionLead">
                Designed for airflow, visibility, and stable structure using the leno weaving method.
              </p>
            </div>
          </Reveal>

          <div className="grid3">
            <Reveal className="card">
              <h3 className="cardTitle">Open weave</h3>
              <p className="muted">Breathable structure with visibility through the fabric.</p>
            </Reveal>
            <Reveal className="card">
              <h3 className="cardTitle">Stable yarn locking</h3>
              <p className="muted">Leno twist helps reduce yarn slippage and improves stability.</p>
            </Reveal>
            <Reveal className="card">
              <h3 className="cardTitle">Bulk-ready supply</h3>
              <p className="muted">Roll formats and packaging aligned to manufacturing needs.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="applications" className="section sectionAlt">
        <div className="container">
          <Reveal>
            <div className="sectionHead">
              <h2 className="sectionTitle">Applications</h2>
              <p className="sectionLead">Common use-cases depending on your specification and finish.</p>
            </div>
          </Reveal>

          <div className="grid2">
            <Reveal className="card">
              <h3 className="cardTitle">Industrial & technical</h3>
              <p className="muted">Use where airflow and stable structure matter.</p>
              <div className="divider" />
              <div className="chips">
                <span className="chip">Packaging layers</span>
                <span className="chip">Protective wraps</span>
                <span className="chip">Liners</span>
              </div>
            </Reveal>

            <Reveal className="card">
              <h3 className="cardTitle">Textile & general</h3>
              <p className="muted">Adaptable for different finishing and handling requirements.</p>
              <div className="divider" />
              <div className="chips">
                <span className="chip">Interlinings</span>
                <span className="chip">Support layers</span>
                <span className="chip">Custom uses</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="specs" className="section">
        <div className="container">
          <Reveal>
            <div className="sectionHead">
              <h2 className="sectionTitle">Specification checklist</h2>
              <p className="sectionLead">
                Share these details for an accurate quote and predictable repeat orders.
              </p>
            </div>
          </Reveal>

          <div className="specGrid">
            <Reveal className="specCard">
              <div className="specCardTitle">Dimensions</div>
              <div className="specRow">
                <span className="muted">Width</span>
                <span>As required</span>
              </div>
              <div className="specRow">
                <span className="muted">Roll length</span>
                <span>As required</span>
              </div>
            </Reveal>

            <Reveal className="specCard">
              <div className="specCardTitle">Finishing</div>
              <div className="specRow">
                <span className="muted">Finish type</span>
                <span>As required</span>
              </div>
              <div className="specRow">
                <span className="muted">Packaging</span>
                <span>Bulk / roll</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="noteCard">
            <div className="noteTitle">Need help defining specs?</div>
            <p className="muted">
              Tell us your use-case and we’ll help recommend the right weave openness and finishing.
            </p>
            <Link to="/contact" className="btn btnPrimary">
              Talk to Sales
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


