import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Aboutus.css";

const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=90",
];

const textContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const textItem = {
    hidden: {
        opacity: 0,
        y: 35,
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

const imageVariants = {
    hidden: {
        opacity: 0,
        x: 70,
        y: -20,
        scale: 0.88,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.95,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        x: 80,
        scale: 0.92,
        transition: {
            duration: 0.45,
            ease: "easeInOut",
        },
    },
};

export default function Aboutus() {
    const [active, setActive] = useState(0);

    const nextImage = () => {
        setActive((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActive((prev) => (prev - 1 + images.length) % images.length);
    };

    const stackImages = [0, 1, 2, 3, 4].map(
        (_, index) => images[(active + index) % images.length]
    );

    return (
        <section className="about-section">

            <div className="about-container">

                {/* ================= LEFT ================= */}
                <motion.div
                    className="about-text-content"
                    variants={textContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >

                    <motion.h1 variants={textItem}>
                        About Us
                    </motion.h1>

                    <motion.div
                        className="about-divider"
                        variants={textItem}
                    />

                    <motion.h2 variants={textItem}>
                        Where Imagination Meets Interiors
                    </motion.h2>

                    <motion.p variants={textItem}>
                        Welcome to Vikas Builders, where craftsmanship meets
                        innovation in construction.
                    </motion.p>

                    <motion.p variants={textItem}>
                        At Vikas Builders, we’re more than just builders;
                        we’re creators of lasting legacies. With a passion
                        for excellence and a commitment to quality, we bring
                        dreams to life, one project at a time.
                    </motion.p>

                    <motion.p variants={textItem}>
                        Founded on the principles of integrity, reliability,
                        and unparalleled service, we’ve been serving
                        communities since 1986. Our journey began with a
                        vision to redefine construction by blending
                        traditional expertise with modern techniques,
                        and today, we stand as a beacon of trust in the
                        industry.
                    </motion.p>

                </motion.div>


                {/* ================= RIGHT ================= */}
                <div className="about-gallery">

                    <div className="about-stack">

                        <AnimatePresence initial={false} mode="sync">

                            {stackImages.map((image, index) => {

                                const isFront = index === 4;

                                return (
                                    <motion.img
                                        key={`${image}-${index}-${active}`}
                                        src={image}
                                        alt={`Interior ${index + 1}`}
                                        className="about-stack-image"
                                        variants={imageVariants}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        transition={{
                                            delay: index * 0.10,
                                        }}
                                        style={{
                                            left: `${index * 25}px`,
                                            top: `${index * 20}px`,
                                            zIndex: index + 1,
                                            width: isFront ? "330px" : "330px",
                                            height: isFront ? "330px" : "330px",
                                            opacity: isFront ? 1 : 0.9 - index * 0.05,
                                        }}
                                    />
                                );
                            })}

                        </AnimatePresence>

                    </div>


                    {/* ARROWS */}
                    <div className="about-arrows">

                        <motion.button
                            type="button"
                            onClick={prevImage}
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous image"
                        >
                            ←
                        </motion.button>

                        <motion.button
                            type="button"
                            onClick={nextImage}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next image"
                        >
                            →
                        </motion.button>

                    </div>

                </div>

            </div>

        </section>
    );
}