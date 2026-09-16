import { motion } from "framer-motion";
import "./Contactinto1.css";

export default function ContactIntro1() {
  return (
    <section className="contact-page-hero">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
        alt="Contact Us"
        className="contact-page-hero-image"
      />

      {/* DARK OVERLAY */}
      <div className="contact-page-hero-overlay" />

      {/* CONTENT */}
      <div className="contact-page-hero-container">

        <motion.div
          className="contact-page-hero-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Contact Us
          </motion.h1>

          <motion.div
            className="contact-page-hero-line"
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "100%",
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Home &gt; Contact Us
          </motion.p>
        </motion.div>

      </div>

    </section>
  );
}