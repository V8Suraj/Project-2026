import { motion } from "framer-motion";
import "./ProjectsHero.css";

export default function ProjectsHero() {
    return (
        <section className="projects-hero">

            {/* Background Image */}
            <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
                alt="Projects"
                className="projects-hero-image"
            />

            {/* Dark Overlay */}
            <div className="projects-hero-overlay" />

            {/* Content */}
            <div className="projects-hero-container">

                <motion.div
                    className="projects-hero-content"
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <h1>Projects</h1>

                    <p>
                        Home &gt; Projects
                    </p>
                </motion.div>

            </div>

        </section>
    );
}