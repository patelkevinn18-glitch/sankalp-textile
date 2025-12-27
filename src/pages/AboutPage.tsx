import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export function AboutPage() {
  return (
    <div className="page">
      <section className="pageHero">
        <div className="container">
          <Reveal>
            <h1 className="pageTitle">Built around manufacturing discipline</h1>
            <p className="pageLead">
              Sankalp Textile focuses on producing premium quality leno gauze with consistent output, clear
              specifications, and a straightforward ordering experience.
            </p>
            <div className="inlineActions">
              <Link to="/products" className="btn btnPrimary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn btnGhost">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid2">
            <Reveal className="card">
              <h2 className="cardTitle">What we manufacture</h2>
              <p className="muted">
                Leno gauze is an open weave fabric known for airflow, stability, and visibility. leno gauze is used in POP bandages.
              </p>
              <div className="divider" />
              <div className="muted small">
                Typical order discussion includes width, GSM, weave openness, roll length, finishing and
                packaging requirements.
              </div>
            </Reveal>

            <Reveal className="card">
              <h2 className="cardTitle">How we work</h2>
              <p className="muted">
                We prioritize a repeatable workflow: confirm specs, manufacture with staged checks, and
                dispatch with packaging suitable for handling and storage.
              </p>
              <div className="divider" />
              <div className="checkList">
                <div className="checkItem">
                  <span className="checkDot" aria-hidden="true" />
                  <span>Clear communication on lead times</span>
                </div>
                <div className="checkItem">
                  <span className="checkDot" aria-hidden="true" />
                  <span>Batch consistency focus for reorders</span>
                </div>
                <div className="checkItem">
                  <span className="checkDot" aria-hidden="true" />
                  <span>Quality approach designed for manufacturing</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* <div className="imageGrid imageGridCompact">
            <Reveal className="imageCard">
              <ResponsiveImage
                src={siteImages.loom.src}
                alt={siteImages.loom.alt}
                className="image"
                width={2400}
                height={1600}
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <div className="imageCaption">Manufacturing</div>
            </Reveal>
            <Reveal className="imageCard">
              <ResponsiveImage
                src={siteImages.inspection.src}
                alt={siteImages.inspection.alt}
                className="image"
                width={2400}
                height={1600}
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <div className="imageCaption">Quality checks</div>
            </Reveal>
            <Reveal className="imageCard">
              <ResponsiveImage
                src={siteImages.rolls.src}
                alt={siteImages.rolls.alt}
                className="image"
                width={2400}
                height={1600}
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <div className="imageCaption">Bulk supply</div>
            </Reveal>
          </div> */}
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <Reveal>
            <div className="sectionHead">
              <h2 className="sectionTitle">Values that guide our output</h2>
              <p className="sectionLead">Simple principles that keep quality predictable and consistent.</p>
            </div>
          </Reveal>

          <div className="grid3">
            <Reveal className="card">
              <h3 className="cardTitle">Consistency</h3>
              <p className="muted">
                We optimize for repeatable results so orders match the agreed specification.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3 className="cardTitle">Clarity</h3>
              <p className="muted">
                Straightforward communication on specs, availability, and lead times.
              </p>
            </Reveal>
            <Reveal className="card">
              <h3 className="cardTitle">Reliability</h3>
              <p className="muted">
                A manufacturing-first mindset—built to serve production schedules and repeat business.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}


