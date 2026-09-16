import { motion } from "framer-motion";
import "./AboutStory.css";

const revealUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AboutStory() {
  return (
    <section className="about-story">

      <div className="about-story-container">

        {/* TOP HEADING */}
        <motion.h2
          className="about-story-heading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Staying dedicated to churn out timeless innovative
          <br />
          designs
        </motion.h2>


        {/* MAIN ROW */}
        <div className="about-story-main">

          {/* LEFT IMAGE */}
          <motion.div
            className="about-story-image-large"
            variants={revealLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury kitchen interior"
            />
          </motion.div>


          {/* RIGHT TEXT */}
          <motion.div
            className="about-story-text-top"
            variants={revealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p>
              What sets us apart is our unwavering dedication to
              customer satisfaction. From concept to completion,
              we collaborate closely with our clients,
              understanding their vision and exceeding their
              expectations. Our skilled team of professionals
              combines years of experience with innovative
              solutions, ensuring every project is delivered with
              precision and perfection.
            </p>

            <p>
              Whether it’s residential or commercial construction,
              we have the expertise and resources to tackle
              projects of any scale and complexity. From remodels
              to ground-up constructions, we approach each
              endeavour with the same level of enthusiasm and
              attention to detail.
            </p>
          </motion.div>

        </div>


        {/* LOWER CONTENT */}
        <div className="about-story-bottom">

          {/* LOWER LEFT TEXT */}
          <motion.div
            className="about-story-text-bottom"
            variants={revealLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <p>
              But it’s not just about what we build; it’s about the
              relationships we cultivate along the way. We take
              pride in our transparent communication, reliability,
              and commitment to delivering exceptional results.
            </p>

            <p>
              Every project is approached with care, precision,
              and a genuine understanding of our client’s vision.
            </p>
          </motion.div>


          {/* LOWER RIGHT IMAGE */}
          <motion.div
            className="about-story-image-small"
            variants={revealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury interior detail"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}