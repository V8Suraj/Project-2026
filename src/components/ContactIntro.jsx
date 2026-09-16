import "./ContactIntro.css";

export default function ContactIntro() {
  return (
    <section className="contact-intro">

      <div className="contact-intro-container">

        {/* TOP RIGHT LINK */}
        <div className="contact-intro-link">
          <a href="#contact">
            <span>Contact Us</span>
            <span className="contact-intro-arrow">↗</span>
          </a>
        </div>

        {/* HEADING */}
        <h1 className="contact-intro-title">
          Get in Touch
        </h1>

        {/* DIVIDER */}
        <div className="contact-intro-divider"></div>

        {/* SUBTITLE */}
        <h2 className="contact-intro-subtitle">
          Building Relationships, One Conversation at a Time
        </h2>

      </div>

    </section>
  );
}