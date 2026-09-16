import { motion } from "framer-motion";
import "./showcase.css";

const showcaseItems = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 5,
        image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 6,
        image:
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 7,
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 8,
        image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=90",
    },
    {
        id: 9,
        image:
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=90",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 45,
        scale: 0.96,
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

export default function Showcase() {
    return (
        <section className="showcase-section">

            <div className="showcase-container">

                {/* HEADING */}
                <motion.div
                    className="showcase-heading"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <h2>Showcase</h2>

                    <div className="showcase-divider" />

                    <p>Bringing visions into reality</p>
                </motion.div>


                {/* 6 CARDS */}
                <motion.div
                    className="showcase-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {showcaseItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="showcase-card"
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.015,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <img
                                src={item.image}
                                alt={`Showcase ${item.id}`}
                            />

                            <div className="showcase-card-overlay" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>

        </section>
    );
}