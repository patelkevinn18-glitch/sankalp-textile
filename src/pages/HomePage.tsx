import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { siteImages } from "../content/siteImages";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroInner">
          <Reveal className="heroCopy">
            <h1 className="heroTitle">
              Premium quality <span className="accent">leno gauze</span> built for consistency
            </h1>
            <p className="heroLead">
              Sankalp Textile manufactures breathable, durable leno gauze with dependable lead times and
              clear specifications for your production needs.
            </p>
            <div className="heroActions">
              <Link to="/contact" className="btn btnPrimary">
                Request a Quote
              </Link>
              <Link to="/products" className="btn btnGhost">
                Explore Products
              </Link>
            </div>
            <div className="heroMeta">
              <div className="metaCard">
                <div className="metaValue">Consistent weave</div>
                <div className="metaLabel">Uniform openings & strength</div>
              </div>
              <div className="metaCard">
                <div className="metaValue">Bulk ready</div>
                <div className="metaLabel">Clear specs for repeat orders</div>
              </div>
              <div className="metaCard">
                <div className="metaValue">Quality checks</div>
                <div className="metaLabel">Inspection at key stages</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="heroVisual">
            <div className="visualCard">
              <ResponsiveImage
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                className="visualImage"
                width={2400}
                height={1600}
                priority
                sizes="(max-width: 720px) 100vw, 44vw"
              />
              <div className="visualGlow" aria-hidden="true" />
              <div className="visualGrid" aria-hidden="true" />
              <div className="visualContent">
                <div className="visualTitle">Leno Gauze</div>
                <div className="visualSubtitle">Breathable · Durable · Stable structure</div>
                <div className="visualSpecs">
                  <div className="specLine">
                    <span className="specKey">Weave</span>
                    <span className="specVal">Leno / Open weave</span>
                  </div>
                  <div className="specLine">
                    <span className="specKey">Finish</span>
                    <span className="specVal">As per requirement</span>
                  </div>
                  <div className="specLine">
                    <span className="specKey">Supply</span>
                    <span className="specVal">Roll / bulk packaging</span>
                  </div>
                </div>
                <Link to="/quality" className="linkArrow">
                  See our quality approach <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sectionHead">
              <h2 className="sectionTitle">Reference visuals</h2>
              <p className="sectionLead">
                High-quality visuals to represent manufacturing, bulk readiness, and quality checks (replace
                anytime with your own factory/product photos).
              </p>
            </div>
          </Reveal>

          <div className="imageGrid">
            <Reveal className="imageCard">
              <ResponsiveImage
                src={siteImages.loom.src}
                alt={siteImages.loom.alt}
                className="image"
                width={2400}
                height={1600}
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <div className="imageCaption">Manufacturing / Weaving</div>
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
              <div className="imageCaption">Bulk supply & packaging</div>
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sectionHead">
              <h2 className="sectionTitle">Why Sankalp Textile</h2>
              <p className="sectionLead">
                A focused manufacturing workflow for predictable output, consistent quality, and smooth
                repeat ordering.
              </p>
            </div>
          </Reveal>

          <div className="grid3">
            <Reveal className="card">
              <div className="cardIcon" aria-hidden="true">
                ✓
              </div>
              <h3 className="cardTitle">Consistency first</h3>
              <p className="muted">
                Process checks to help keep weave stability and finishing aligned to your specification.
              </p>
            </Reveal>
            <Reveal className="card">
              <div className="cardIcon" aria-hidden="true">
                ⧉
              </div>
              <h3 className="cardTitle">Specification clarity</h3>
              <p className="muted">
                Simple, repeatable specs so you can reorder confidently with the same output every time.
              </p>
            </Reveal>
            <Reveal className="card">
              <div className="cardIcon" aria-hidden="true">
                ⚙
              </div>
              <h3 className="cardTitle">Manufacturing readiness</h3>
              <p className="muted">
                Built for production—packaging and documentation oriented for bulk, not samples-only.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <Reveal>
            <div className="split">
              <div>
                <h2 className="sectionTitle">Premium leno gauze for real-world use</h2>
                <p className="sectionLead">
                  Leno weaving locks yarns in place to improve stability while keeping the fabric open and
                  breathable.
                </p>
                <div className="checkList">
                  <div className="checkItem">
                    <span className="checkDot" aria-hidden="true" />
                    <span>Stable structure with open visibility</span>
                  </div>
                  <div className="checkItem">
                    <span className="checkDot" aria-hidden="true" />
                    <span>Balanced strength and airflow</span>
                  </div>
                  <div className="checkItem">
                    <span className="checkDot" aria-hidden="true" />
                    <span>Configured to match your finish and packaging needs</span>
                  </div>
                </div>
                <div className="inlineActions">
                  <Link to="/products" className="btn btnPrimary">
                    View product details
                  </Link>
                  <Link to="/contact" className="btn btnGhost">
                    Ask about availability
                  </Link>
                </div>
              </div>

              <Reveal className="processCard">
                <div className="processTitle">How we support your order</div>
                <div className="processSteps">
                  <div className="step">
                    <div className="stepNum">1</div>
                    <div className="stepBody">
                      <div className="stepHeading">Confirm specs</div>
                      <div className="muted small">GSM, width, roll length, finishing, packaging.</div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="stepNum">2</div>
                    <div className="stepBody">
                      <div className="stepHeading">Manufacture</div>
                      <div className="muted small">Consistent checks during weaving & finishing.</div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="stepNum">3</div>
                    <div className="stepBody">
                      <div className="stepHeading">Dispatch</div>
                      <div className="muted small">Packed for handling and repeat ordering.</div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-start' }}>
                  <Link to="/contact" className="quoteButton">
                    Start a quote request <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container">
          <Reveal className="ctaCard">
            <div>
              <h2 className="ctaTitle">Need leno gauze for a bulk requirement?</h2>
              <p className="ctaLead">
                Share your specs and timeline — we’ll respond with availability and a quote.
              </p>
            </div>
            <div className="ctaActions">
              <Link to="/contact" className="btn btnPrimary">
                Contact Sales
              </Link>
              <Link to="/quality" className="btn btnGhost">
                Our Quality
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}


