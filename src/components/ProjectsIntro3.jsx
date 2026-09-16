import { motion } from "framer-motion";
import "./ProjectsIntro3.css";

const projects = [
  {
    title: "Residential",
    description:
      "Experience luxury living in our plush, craftily designed residential projects, complete with all modern amenities for ultimate comfort and convenience.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Commercial",
    description:
      "Give your business a renovated look in our commercial properties available with premium amenities and turnkey solutions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Turnkey",
    description:
      "Unlock convenience and efficiency with our turnkey projects, offering seamless solutions from start to finish for hassle-free implementation.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
  },
];

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardsVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectsIntro3() {
  return (
    <section className="projects-section">

      <div className="projects-section-container">

        {/* =========================
            HEADING
        ========================== */}

        <motion.div
          className="projects-section-heading"
          variants={headingVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>
            Sneak peek into our
            <br />
            projects
          </h2>

          <div className="projects-section-divider" />

          <p>
            Our Top Projects And Upcoming Projects
          </p>
        </motion.div>


        {/* =========================
            PROJECT CARDS
        ========================== */}

        <motion.div
          className="projects-section-grid"
          variants={cardsVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >

          {projects.map((project) => (
            <motion.a
              href="#"
              key={project.title}
              className="project-info-card"
              variants={cardVariant}
              whileHover={{
                y: -6,
              }}
            >

              {/* IMAGE */}
              <div className="project-info-card-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>


              {/* CARD CONTENT */}
              <div className="project-info-card-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>

            </motion.a>
          ))}

        </motion.div>

      </div>

    </section>
  );
}