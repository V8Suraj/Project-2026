import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Gallery.css";

const galleryItems = [
    {
        id: 1,
        category: "Bathroom",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 2,
        category: "Bathroom",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 3,
        category: "Bathroom",
        image:
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 4,
        category: "Bathroom",
        image:
            "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 5,
        category: "Bedroom",
        image:
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 6,
        category: "Bathroom",
        image:
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 7,
        category: "Kitchen",
        image:
            "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 8,
        category: "Kitchen",
        image:
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 9,
        category: "Drawing Room",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 10,
        category: "Bedroom",
        image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 11,
        category: "Drawing Room",
        image:
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=90",
    },
    {
        id: 12,
        category: "Parking",
        image:
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=900&q=90",
    },
];

const filters = [
    "All",
    "Bathroom",
    "Kitchen",
    "Drawing Room",
    "Bedroom",
    "Parking",
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredItems =
        activeFilter === "All"
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeFilter
            );

    return (
        <div className="gallery-page">

            {/* ===================================
          HERO
      =================================== */}

            <section className="gallery-hero">

                <img
                    src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90"
                    alt="Gallery"
                    className="gallery-hero-image"
                />

                <div className="gallery-hero-overlay" />

                <motion.div
                    className="gallery-hero-content"
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
                    <h1>Gallery</h1>

                    <p>
                        Home &gt; Gallery
                    </p>
                </motion.div>

            </section>


            {/* ===================================
          GALLERY CONTENT
      =================================== */}

            <section className="gallery-content">

                <div className="gallery-container">

                    {/* HEADING */}

                    <motion.div
                        className="gallery-heading"
                        initial={{
                            opacity: 0,
                            y: 45,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
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
                        <h2>Our Amazing Work</h2>

                        <div className="gallery-divider" />

                        <h3>Image Show</h3>
                    </motion.div>


                    {/* FILTER BUTTONS */}

                    <motion.div
                        className="gallery-filters"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                    >
                        {filters.map((filter) => (
                            <button
                                type="button"
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={
                                    activeFilter === filter
                                        ? "gallery-filter active"
                                        : "gallery-filter"
                                }
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>


                    {/* IMAGE GRID */}

                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeFilter}
                            className="gallery-grid"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="gallery-card"
                                    variants={itemVariants}
                                    layout
                                    whileHover={{
                                        y: -6,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.category}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                </div>

            </section>

        </div>
    );
}