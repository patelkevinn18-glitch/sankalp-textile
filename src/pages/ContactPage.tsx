import { useCallback, useState, type ChangeEvent, type FormEvent } from "react";
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

// Vercel API endpoint for sending emails
const API_ENDPOINT = "/api/send-email";

export function ContactPage() {
  const [form_state, setFormState] = useState<ContactFormState>(DEFAULT_STATE);
  const [is_submitted, setIsSubmitted] = useState(false);
  const [error_message, setErrorMessage] = useState<string | null>(null);
  const [is_loading, setIsLoading] = useState(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setErrorMessage(null);
      setIsSubmitted(false);
      setIsLoading(true);

      const full_name = form_state.full_name.trim();
      const email = form_state.email.trim();
      const message = form_state.message.trim();

      if (!full_name) {
        setErrorMessage("Please enter your name.");
        setIsLoading(false);
        return;
      }
      if (!email || !isValidEmail(email)) {
        setErrorMessage("Please enter a valid email address.");
        setIsLoading(false);
        return;
      }
      if (!message) {
        setErrorMessage("Please enter your message.");
        setIsLoading(false);
        return;
      }

      try {
        // Send email via Vercel API endpoint
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name,
            email,
            company_name: form_state.company_name.trim() || "",
            message,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to send email");
        }

        // Reset form state and show success message
        setFormState(DEFAULT_STATE);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error sending email:", error);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Failed to send email. Please try again later or contact us directly."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [form_state]
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
                  <span className="muted">Whatsapp</span>
                  <a className="link" href="https://wa.me/917859953157?text=Hello%20Sankalp%20Textile,%20I%20would%20like%20to%20inquire%20about%20your%20products.">
                    +91 7859953157
                  </a>
                </div>
                <div className="contactRow">
                  <span className="muted">Hours</span>
                  <span>Mon–Sat · 9:00 AM – 6:00 PM</span>
                </div>
                <div className="contactRow">
                  <span className="muted">Office Address</span>
                  <a className="link" href="https://maps.app.goo.gl/3VtbFMingJXJovxe9" target="_blank" rel="noopener noreferrer">
                    44, Girivar Glean, B/h Megma restaurant, S.P. ring road, Odhav, Ahmedabad, Gujarat, India.
                  </a>
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
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {error_message ? <div className="alert">{error_message}</div> : null}
              {is_submitted ? <div className="success">Thank you! Your message has been sent successfully. We'll get back to you soon.</div> : null}

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

                <button 
                  type="submit" 
                  className="btn btnPrimary btnFull"
                  disabled={is_loading}
                >
                  {is_loading ? "Sending..." : "Send Email"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}


