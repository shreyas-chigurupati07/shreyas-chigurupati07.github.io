import "./Contact.css";

const links = [
  { icon: "📧", label: "Email", value: "shreyas.chigurupati07@gmail.com", href: "mailto:shreyas.chigurupati07@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/shreyas-chigurupati", href: "https://linkedin.com/in/shreyas-chigurupati" },
  { icon: "🐙", label: "GitHub", value: "github.com/shreyas-chigurupati07", href: "https://github.com/shreyas-chigurupati07" },
];

function Contact() {
  return (
    <section className="contact section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Open to full-time AI Engineer roles across applied AI, LLM systems, and computer vision.</p>

        <div className="contact__inner">
          <div className="contact__intro card">
            <div className="contact__open-badge">
              <span className="contact__dot" />
              Open to Full-Time AI Engineering Opportunities
            </div>
            <p className="contact__text">
              I'm currently looking for full-time roles in AI engineering, applied machine learning,
              multimodal systems, LLM products, and computer vision. If you're building ambitious AI products,
              I'd love to connect.
            </p>
            <div className="contact__links">
              {links.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__link card">
                  <span className="contact__link-icon">{icon}</span>
                  <div>
                    <p className="contact__link-label">{label}</p>
                    <p className="contact__link-value">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
