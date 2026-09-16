import "./ProjectContact.css";
import complogo from "./assets/images/complogo.jpeg"

export default function ProjectContact() {
  return (
    <section className="project-contact">

      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <img
        className="project-contact-bg"
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
        alt="Luxury interior"
      />

      {/* =========================
          TOP DARK OVERLAY
      ========================== */}
      <div className="project-contact-top-overlay" />

      {/* =========================
          CTA
      ========================== */}
      <div className="project-contact-cta">

        <h2>Have a project in mind?</h2>

        <p>Do not hesitate to say Hi</p>

        <a href="#contact" className="project-talk-button">
          <span>Let’s Talk</span>
          <span className="project-talk-arrow">↗</span>
        </a>

      </div>


      {/* =========================
          BOTTOM INFORMATION PANEL
      ========================== */}
      <div className="project-contact-bottom">

        <div className="project-contact-info">

          {/* LOGO + SOCIAL */}
          <div className="project-brand">

            <div className="project-brand-logo">
<div className="project-brand-v flex h-[150px] w-[150px] items-center justify-center overflow-hidden border-r border-white/50">
  <img
    src={complogo}
    alt="Vikas Builders"
    className="!h-[170px] !w-[180px] object-contain scale-[1.5]"
  />
</div>

              <div className="project-brand-name">
                <div>UGRATARA ELITE BUILD PVT</div>
                <span>BUILD PVT LTD</span>
              </div>

            </div>


            {/* SOCIAL ICONS */}
            <div className="project-socials">

              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>

              <a href="#" aria-label="Pinterest">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3a8 8 0 0 0-3 15.4c-.1-1.3 0-2.8.3-4l1-4c-.2-.4-.3-.9-.3-1.4 0-1.3.8-2.2 1.8-2.2.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.4-.3 1 .5 1.9 1.5 1.9 1.8 0 3-1.9 3-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.7 2.2-4.7 4.5 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c-.1.4-.4.5-.8.3-1.5-.7-2.4-2.8-2.4-4.5 0-3.6 2.6-6.9 7.4-6.9 3.9 0 6.9 2.8 6.9 6.5 0 3.9-2.5 7.1-6 7.1-1.2 0-2.3-.6-2.7-1.3l-.7 2.8c-.3 1-.9 2.2-1.3 2.9A8 8 0 1 0 12 3Z" />
                </svg>
              </a>

              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <path d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 16.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8ZM10 15V9l5 3-5 3Z" />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 8H3V21h3.5V8ZM4.8 3A2.1 2.1 0 1 0 4.8 7.2 2.1 2.1 0 0 0 4.8 3ZM21 13.5c0-3.9-2.1-5.7-5-5.7-2.3 0-3.3 1.3-3.9 2.2V8H8.6v13h3.5v-6.4c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V21H21v-7.5Z" />
                </svg>
              </a>

              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 12 15a3.5 3.5 0 0 1 0-6.5Zm0 2A1.5 1.5 0 1 0 12 13a1.5 1.5 0 0 0 0-3Zm4.5-3.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z" />
                </svg>
              </a>

            </div>
          </div>


          {/* CONTACT INFORMATION */}
          <div className="project-contact-column">
            <h3>Contact Information</h3>

            <p>+91-124-4942844, 55</p>

            <p>info@vikasbuilders.com</p>
          </div>


          {/* HEAD OFFICE */}
          <div className="project-contact-column project-office">
            <h3>Head Office</h3>

            <p>
              11, Bougainvilla Marg, DLF Phase 2,
              <br />
              Sector 25, Gurugram, Haryana 122002
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}