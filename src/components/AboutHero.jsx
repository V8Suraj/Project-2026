import { motion } from "framer-motion";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">

      {/* Background */}
      <img
        className="about-hero-bg"
        src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90"
        alt="Luxury building"
      />

      {/* Dark overlay */}
      <div className="about-hero-overlay" />

      {/* Content */}
      <div className="about-hero-content">

        <motion.h1
          initial={{
            opacity: 0,
            y: 45,
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
          About Us
        </motion.h1>

        <motion.div
          className="about-hero-line"
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
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Home &gt; About Us
        </motion.p>

      </div>

    </section>
  );
}