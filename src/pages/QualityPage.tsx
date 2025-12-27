import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export function QualityPage() {
  return (
    <div className="page">
      <section className="pageHero">
        <div className="container">
          <Reveal>
            <h1 className="pageTitle">Quality built into the workflow</h1>
            <p className="pageLead">
              Our approach focuses on repeatable output—clear specifications, staged checks, and careful
              handling to support consistent bulk supply.
            </p>
            <div className="inlineActions">
              <Link to="/contact" className="btn btnPrimary">
                Request a Quote
              </Link>
              <Link to="/products" className="btn btnGhost">
                View Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sectionHead">
              <h2 className="sectionTitle">What we check</h2>
              <p className="sectionLead">
                A practical checklist that keeps output aligned to spec and supports reorders.
              </p>
            </div>
          </Reveal>

          <div className="grid3">
            <Reveal className="card">
              <h3 className="cardTitle">Weave/Absorbency</h3>
              <p className="muted">Proper in house chemical process for achieving high absorbency and finishing.</p>
            </Reveal>
            <Reveal className="card">
              <h3 className="cardTitle">Dimensions & roll build</h3>
              <p className="muted">Width/length alignment and roll handling consistency.</p>
            </Reveal>
            <Reveal className="card">
              <h3 className="cardTitle">Finish & packaging</h3>
              <p className="muted">Finishing requirements and packing suitable for bulk movement.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <Reveal>
            <div className="split">
              <div>
                <h2 className="sectionTitle">Order-ready documentation mindset</h2>
                <p className="sectionLead">
                  We aim to keep your ordering simple by working from specs that can be repeated across
                  batches.
                </p>
                <div className="checkList">
                  <div className="checkItem">
                    <span className="checkDot" aria-hidden="true" />
                    <span>Confirm the spec before production starts</span>
                  </div>
                  <div className="checkItem">
                    <span className="checkDot" aria-hidden="true" />
                    <span>Stage checks during manufacturing</span>
                  </div>
                  <div className="checkItem">
                    <span className="checkDot" aria-hidden="true" />
                    <span>Final check before dispatch</span>
                  </div>
                </div>
              </div>

              <Reveal className="noteCard">
                <div className="noteTitle">Want a faster quote?</div>
                <p className="muted">
                  Share your use-case, width, GSM, and roll length. We’ll respond with availability and a
                  timeline.
                </p>
                <Link to="/contact" className="btn btnPrimary">
                  Contact Sales
                </Link>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


