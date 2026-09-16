import { motion } from "framer-motion";
import "./ContactForm.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <motion.div
          className="contact-form-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <motion.h1 variants={itemVariants}>
            Let's Talk
          </motion.h1>

          <motion.div
            className="contact-form-divider"
            variants={itemVariants}
          />

          <motion.h2 variants={itemVariants}>
            Got a project on your mind? Let's discuss
            <br />
            about the details.
          </motion.h2>


          {/* CALL */}
          <motion.div
            className="contact-detail"
            variants={itemVariants}
          >
            <h3>Call Us</h3>

            <a href="tel:+911244942844">
              +91-124-4942844, 55
            </a>
          </motion.div>


          {/* EMAIL */}
          <motion.div
            className="contact-detail"
            variants={itemVariants}
          >
            <h3>Mail Us</h3>

            <a href="mailto:info@vikasbuilders.com">
              info@vikasbuilders.com
            </a>
          </motion.div>

        </motion.div>


        {/* =========================
            RIGHT FORM
        ========================== */}

        <motion.div
          className="contact-form-right"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="contact-field">
              <label htmlFor="contact-name">
                YOUR NAME
              </label>

              <input
                id="contact-name"
                type="text"
                required
              />
            </div>


            {/* EMAIL */}
            <div className="contact-field">
              <label htmlFor="contact-email">
                YOUR EMAIL
              </label>

              <input
                id="contact-email"
                type="email"
                required
              />
            </div>


            {/* CONTACT */}
            <div className="contact-field">
              <label htmlFor="contact-number">
                YOUR CONTACT NUMBER
              </label>

              <input
                id="contact-number"
                type="tel"
                required
              />
            </div>


            {/* MESSAGE */}
            <div className="contact-field">
              <label htmlFor="contact-message">
                YOUR MESSAGE
              </label>

              <textarea
                id="contact-message"
                rows="8"
                required
              />
            </div>


            {/* SUBMIT */}
            <motion.button
              type="submit"
              className="contact-submit"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              SUBMIT
            </motion.button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}