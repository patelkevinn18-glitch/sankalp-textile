import { useCallback, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Reveal } from "../components/Reveal";

type ContactFormState = {
  full_name: string;
  email: string;
  company_name: string;
  message: string;
};

const DEFAULT_STATE: ContactFormState = {
  full_name: "",
  email: "",
  company_name: "",
  message: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactPage() {
  const [form_state, setFormState] = useState<ContactFormState>(DEFAULT_STATE);
  const [is_submitted, setIsSubmitted] = useState(false);
  const [error_message, setErrorMessage] = useState<string | null>(null);

  const mail_to = useMemo(() => "contact@sankalptextile.com", []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setErrorMessage(null);
      setIsSubmitted(false);

      const full_name = form_state.full_name.trim();
      const email = form_state.email.trim();
      const message = form_state.message.trim();

      if (!full_name) {
        setErrorMessage("Please enter your name.");
        return;
      }
      if (!email || !isValidEmail(email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }
      if (!message) {
        setErrorMessage("Please enter your message.");
        return;
      }

      const subject = encodeURIComponent("Inquiry — Sankalp Textile (Leno Gauze)");
      const body = encodeURIComponent(
        [
          `Name: ${full_name}`,
          `Email: ${email}`,
          `Company: ${form_state.company_name.trim() || "-"}`,
          "",
          "Message:",
          message,
        ].join("\n")
      );

      const mailto_link = `mailto:${mail_to}?subject=${subject}&body=${body}`;
      
      // Create a temporary anchor element to trigger mailto (more reliable)
      const link = document.createElement("a");
      link.href = mailto_link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form state and show success message
      setFormState(DEFAULT_STATE);
      setIsSubmitted(true);
    },
    [form_state, mail_to]
  );

  return (
    <div className="page">
      <section className="pageHero">
        <div className="container">
          <Reveal>
            <h1 className="pageTitle">Let’s discuss your requirement</h1>
            <p className="pageLead">
              Send your specs and timeline — we’ll respond with availability, lead time, and a quote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid2">
            <Reveal className="card">
              <h2 className="cardTitle">Contact details</h2>
              <p className="muted">Prefer email? We typically respond quickly during business hours.</p>
              <div className="divider" />
              <div className="contactList">
                <div className="contactRow">
                  <span className="muted">Email</span>
                  <a className="link" href="mailto:contact@sankalptextile.com">
                    contact@sankalptextile.com
                  </a>
                </div>
                <div className="contactRow">
                  <span className="muted">Phone</span>
                  <a className="link" href="tel:+919558551023">
                    +91 9558551023
                  </a>
                </div>
                <div className="contactRow">
                  <span className="muted">Hours</span>
                  <span>Mon–Sat · 9:00 AM – 6:00 PM</span>
                </div>
              </div>
              <div className="divider" />
              <div className="muted small">
                Tip: For the fastest quote, share width, GSM, roll length, finish type, and quantity.
              </div>
            </Reveal>

            <Reveal className="card">
              <h2 className="cardTitle">Send a message</h2>
              <p className="muted small">
                This is a static site — on submit we’ll open your email client with a prefilled message.
              </p>

              {error_message ? <div className="alert">{error_message}</div> : null}
              {is_submitted ? <div className="success">Email draft opened. If it didn’t, copy and send manually.</div> : null}

              <form className="form" onSubmit={handleSubmit}>
                <label className="field">
                  <span className="label">Full name</span>
                  <input
                    name="full_name"
                    value={form_state.full_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className="input"
                  />
                </label>

                <label className="field">
                  <span className="label">Email</span>
                  <input
                    name="email"
                    value={form_state.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="input"
                    inputMode="email"
                  />
                </label>

                <label className="field">
                  <span className="label">Company (optional)</span>
                  <input
                    name="company_name"
                    value={form_state.company_name}
                    onChange={handleChange}
                    placeholder="Company name"
                    autoComplete="organization"
                    className="input"
                  />
                </label>

                <label className="field">
                  <span className="label">Message</span>
                  <textarea
                    name="message"
                    value={form_state.message}
                    onChange={handleChange}
                    placeholder="Share specs (width, GSM, roll length), quantity, finish, and timeline."
                    className="textarea"
                    rows={5}
                  />
                </label>

                <button type="submit" className="btn btnPrimary btnFull">
                  Send Email
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}


