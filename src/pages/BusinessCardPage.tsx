import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import "./businessCard.css";

/* ───────────────────────────── CONFIG ───────────────────────────── */

const COMPANY = {
  name: "Sankalp Textile",
  tagline: "Global Quality With A Touch Of Care.",
  subtitle: "Premium Quality Leno Gauze Manufacturer",
  person: "Mr. Kevin Nayagpara",
  designation: "CEO & Head of International Trade",
  phone: "+919558551023",
  phoneDisplay: "+91 95585 51023",
  whatsapp: "919558551023",
  whatsappDisplay: "+91 95585 51023",
  email: "contact@sankalptextile.com",
  website: "https://www.sankalptextile.com",
  address: "44, Girivar Glean, B/h Megma restaurant, S.P. ring road, Odhav, Ahmedabad - 382415, Gujarat, India.",
  mapLink: "https://maps.app.goo.gl/3VtbFMingJXJovxe9",
  logo: "/images/logo.svg",
  whatsappMsg: "Hello Sankalp Textile, I would like to inquire about your products.",
};

const PRODUCTS = [
  { bold: true, text: "Premium Quality Leno Gauze" },
  { text: "Open weave, breathable fabric" },
  { text: "Stable yarn locking (leno twist)" },
  { text: "Orthopedics – POP bandage base" },
  { text: "Surgical & wound care applications" },
  { text: "Custom width, GSM, roll length & packaging" },
  { text: "Bulk-ready supply" },
];

const ABOUT_TEXT = `Sankalp Textile focuses on producing premium quality leno gauze with consistent output, clear specifications, and a straightforward ordering experience.

Leno gauze is an open weave fabric known for airflow, stability, and visibility. It is widely used in POP bandages and surgical applications.

We prioritize a repeatable workflow: confirm specs, manufacture with staged checks, and dispatch with packaging suitable for handling and storage.

Every meter we manufacture reflects our responsibility toward healthcare, where consistency, trust, and uncompromising standards guide everything we do.`;

const SLIDER_IMAGES = [
  "/images/home.jpg",
  "/images/fabric-rolls.jpg",
  "/images/inspection.jpg",
];

/* ───────────────────────────── ICONS ───────────────────────────── */

// ponytail: inline feather-style paths, no icon lib dependency
const ICONS = {
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
  share: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M16 6l-4-4-4 4 M12 2v13",
  message:
    "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  userPlus: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M8.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M20 8v6 M23 11h-6",
  file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8",
  box: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12",
  qr: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h3v3h-3z M18 18h3v3h-3z",
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2",
  pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  left: "M15 18l-6-6 6-6",
  right: "M9 18l6-6-6-6",
  x: "M18 6L6 18 M6 6l12 12",
  copy: "M9 9h11v11H9z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
  check: "M20 6L9 17l-5-5",
};

type IconName = keyof typeof ICONS;

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ───────────────────────────── PIECES ───────────────────────────── */

function ImageSlider() {
  const [idx, setIdx] = useState(0);
  const n = SLIDER_IMAGES.length;
  return (
    <div className="bcSlider">
      <img key={idx} src={SLIDER_IMAGES[idx]} alt={`${COMPANY.name} – slide ${idx + 1}`} />
      <button className="bcSliderBtn left" onClick={() => setIdx((i) => (i - 1 + n) % n)} aria-label="Previous">
        <Icon name="left" size={20} />
      </button>
      <button className="bcSliderBtn right" onClick={() => setIdx((i) => (i + 1) % n)} aria-label="Next">
        <Icon name="right" size={20} />
      </button>
    </div>
  );
}

function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="bcOverlay" onClick={onClose}>
      <div className="bcModal" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="bcModalHead">
          <h5>{title}</h5>
          <button onClick={onClose} aria-label="Close">
            <Icon name="x" size={20} />
          </button>
        </div>
        <div className="bcModalBody">{children}</div>
      </div>
    </div>
  );
}

function ActionBtn({ icon, label, onClick, href }: { icon: ReactNode; label: string; onClick?: () => void; href?: string }) {
  const inner = (
    <>
      <span className="bcActionIcon">{icon}</span>
      <span className="bcActionLabel">{label}</span>
    </>
  );
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="bcAction">
        {inner}
      </a>
    );
  return (
    <button onClick={onClick} className="bcAction">
      {inner}
    </button>
  );
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="bcDivider">
      <span />
      <h5>{title}</h5>
      <span />
    </div>
  );
}

/* ───────────────────────────── VCARD ───────────────────────────── */

// vCard 3.0: commas/semicolons in values must be escaped
const esc = (s: string) => s.replace(/([,;\\])/g, "\\$1");

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:Nayagpara;Kevin;;Mr.;`,
    `FN:${esc(COMPANY.person)}`,
    `ORG:${esc(COMPANY.name)}`,
    `TITLE:${esc(COMPANY.designation)}`,
    `TEL;TYPE=CELL,VOICE:${COMPANY.phone}`,
    `EMAIL:${COMPANY.email}`,
    `URL:${COMPANY.website}`,
    // Address hidden for now
    // `ADR;TYPE=WORK:;;${esc(COMPANY.address)};;;;`,
    `NOTE:${esc(`${COMPANY.tagline} ${COMPANY.subtitle}`)}`,
    "END:VCARD",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([vcard], { type: "text/vcard;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "Kevin_Nayagpara_Sankalp_Textile.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

const waLink = (text: string) => `https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(text)}`;

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */

type ModalId = "about" | "qr" | "hours" | "share" | "inquiry" | null;

export function BusinessCardPage() {
  const [modal, setModal] = useState<ModalId>(null);
  const [copied, setCopied] = useState(false);
  const closeModal = () => setModal(null);
  const pageUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: `${COMPANY.name} – Digital Business Card`, text: `Check out ${COMPANY.name}'s digital business card`, url: pageUrl });
      } catch {
        /* user cancelled */
      }
    } else {
      setModal("share");
    }
  };

  const copyUrl = async () => {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const submitInquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Name: ${fd.get("fullname")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("mob")}\nMessage: ${fd.get("msg")}`;
    window.open(waLink(msg), "_blank", "noopener");
    closeModal();
  };

  return (
    <>
      {/* React 19 hoists these into <head> */}
      <title>{`${COMPANY.name} – Digital Business Card`}</title>
      <meta name="description" content={`${COMPANY.name} – ${COMPANY.tagline} ${COMPANY.subtitle}.`} />
      <meta name="theme-color" content="#020234" />
      <meta name="robots" content="noindex, nofollow" />

      <div className="bcPage">
        <div className="bcCard">
          <ImageSlider />

          {/* Top action row */}
          <div className="bcTopRow">
            <ActionBtn icon={<Icon name="message" />} label="Inquiry" onClick={() => setModal("inquiry")} />
            <ActionBtn icon={<Icon name="share" />} label="Share" onClick={handleShare} />
          </div>

          {/* Profile */}
          <div className="bcProfile">
            <span className="bcLogo">
              <img src={COMPANY.logo} alt={`${COMPANY.name} logo`} />
            </span>
            <h1>{COMPANY.name.toUpperCase()}</h1>
            <p className="bcTagline">{COMPANY.tagline}</p>
            <p className="bcSubtitle">{COMPANY.subtitle}</p>
            <span className="bcDash" />
            <h2>{COMPANY.person}</h2>
            <p>{COMPANY.designation}</p>
          </div>

          {/* Quick actions */}
          <div className="bcActions">
            <ActionBtn icon={<Icon name="phone" />} label="Call" href={`tel:${COMPANY.phone}`} />
            <ActionBtn icon={<WhatsAppIcon />} label="WhatsApp" href={waLink(COMPANY.whatsappMsg)} />
            <ActionBtn icon={<Icon name="mail" />} label="Email" href={`mailto:${COMPANY.email}`} />
            <ActionBtn icon={<Icon name="userPlus" />} label="Save Contact" onClick={downloadVCard} />
          </div>

          <SectionDivider title="Company Details" />
          <div className="bcActions">
            <ActionBtn icon={<Icon name="file" />} label="About Us" onClick={() => setModal("about")} />
            <ActionBtn icon={<Icon name="box" />} label="Products" href="/products" />
            <ActionBtn icon={<Icon name="qr" />} label="QR Code" onClick={() => setModal("qr")} />
            <ActionBtn icon={<Icon name="clock" />} label="Hours" onClick={() => setModal("hours")} />
            <ActionBtn icon={<Icon name="globe" />} label="Website" href={COMPANY.website} />
          </div>

          <SectionDivider title="Products" />
          <div className="bcList">
            {PRODUCTS.map((s) => (
              <p key={s.text} className={s.bold ? "bold" : undefined}>
                {s.bold ? "" : "• "}
                {s.text}
              </p>
            ))}
          </div>

          <SectionDivider title="Contact" />
          <div className="bcContact">
            <a href={`tel:${COMPANY.phone}`} className="bcContactRow">
              <span className="bcContactIcon">
                <Icon name="phone" size={16} />
              </span>
              <span>{COMPANY.phoneDisplay}</span>
            </a>
            <a href={waLink(COMPANY.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="bcContactRow">
              <span className="bcContactIcon">
                <WhatsAppIcon size={16} />
              </span>
              <span>{COMPANY.whatsappDisplay}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="bcContactRow">
              <span className="bcContactIcon">
                <Icon name="mail" size={16} />
              </span>
              <span>{COMPANY.email}</span>
            </a>

            {/* Address hidden for now
            <div className="bcAddress">
              <p className="bcAddressLabel">Office &amp; Factory</p>
              <p>{COMPANY.address}</p>
              <a href={COMPANY.mapLink} target="_blank" rel="noopener noreferrer" className="bcPill">
                <Icon name="pin" size={14} /> Location
              </a>
            </div>
            */}
          </div>

          <div className="bcFooter">
            <img src={COMPANY.logo} alt="" />
            <span>Digital Business Card</span>
          </div>
        </div>
      </div>

      {/* ═══════════ MODALS ═══════════ */}

      <Modal open={modal === "about"} onClose={closeModal} title="About Us">
        {ABOUT_TEXT.split("\n\n").map((p) => (
          <p key={p} className="bcModalText">
            {p}
          </p>
        ))}
      </Modal>

      <Modal open={modal === "qr"} onClose={closeModal} title="Scan QR Code">
        <div className="bcCenter">
          <span className="bcQrLogo">
            <img src={COMPANY.logo} alt="" />
          </span>
          <h4 className="bcModalTitle">{COMPANY.name}</h4>
          <p className="bcModalSub">{COMPANY.tagline}</p>
          <div className="bcQrBox">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pageUrl)}`} alt="QR code for this card" width={176} height={176} />
          </div>
          <p className="bcModalHint">Scan to view this card</p>
        </div>
      </Modal>

      <Modal open={modal === "hours"} onClose={closeModal} title="Working Hours">
        <div className="bcHoursRow">
          <span>Monday – Saturday</span>
          <strong>9:00 AM – 6:00 PM</strong>
        </div>
        <div className="bcHoursRow">
          <span>Sunday</span>
          <strong className="closed">Closed</strong>
        </div>
      </Modal>

      <Modal open={modal === "share"} onClose={closeModal} title="Share This Card">
        <div className="bcCenter">
          <div className="bcShareBtns">
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${COMPANY.name} – Digital Business Card: ${pageUrl}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href={`mailto:?subject=${encodeURIComponent(`${COMPANY.name} – Digital Business Card`)}&body=${encodeURIComponent(`Check out this digital card: ${pageUrl}`)}`} aria-label="Share via email">
              <Icon name="mail" />
            </a>
          </div>
          <div className="bcCopyRow">
            <input type="text" value={pageUrl} readOnly aria-label="Card URL" />
            <button onClick={copyUrl}>
              <Icon name={copied ? "check" : "copy"} size={16} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </Modal>

      <Modal open={modal === "inquiry"} onClose={closeModal} title="Send Inquiry">
        <form className="bcForm" onSubmit={submitInquiry}>
          <input type="text" name="fullname" placeholder="Full Name" required aria-label="Full Name" />
          <input type="email" name="email" placeholder="Email" required aria-label="Email" />
          <input type="tel" name="mob" placeholder="Phone Number" required aria-label="Phone Number" />
          <textarea name="msg" placeholder="Your Message" rows={3} required aria-label="Your Message" />
          <button type="submit">
            <WhatsAppIcon size={16} /> Send via WhatsApp
          </button>
        </form>
      </Modal>
    </>
  );
}