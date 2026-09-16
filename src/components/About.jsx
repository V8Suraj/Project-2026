import { useState } from "react";
import "./About.css";

const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
];

const stackPositions = [
    {
        x: 0,
        y: 0,
        scale: 0.91,
        opacity: 0.72,
        z: 1,
    },
    {
        x: 28,
        y: 25,
        scale: 0.93,
        opacity: 0.78,
        z: 2,
    },
    {
        x: 56,
        y: 50,
        scale: 0.95,
        opacity: 0.84,
        z: 3,
    },
    {
        x: 84,
        y: 75,
        scale: 0.97,
        opacity: 0.91,
        z: 4,
    },
    {
        x: 112,
        y: 100,
        scale: 1,
        opacity: 1,
        z: 5,
    },
];

export default function About() {
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setActiveImage(
            (prev) => (prev - 1 + images.length) % images.length
        );
    };

    return (
        <section className="about-section">

            {/* HEADING */}
            <div className="about-heading">
                <h1>About Our Company</h1>

                <div className="about-divider" />

                <h2>Your Vision, Our Design Expertise</h2>
            </div>


            {/* CONTENT */}
            <div className="about-layout">

                {/* LEFT */}
                <div className="about-left">

                    <div className="about-image-stage">

                        {images.map((image, index) => {
                            const position =
                                (index - activeImage + images.length) %
                                images.length;

                            const item = stackPositions[position];

                            return (
                                <img
                                    key={`${image}-${index}`}
                                    src={image}
                                    alt={`Luxury interior ${index + 1}`}
                                    className="about-stack-image"
                                    style={{
                                        transform: `
                      translate3d(
                        ${item.x}px,
                        ${item.y}px,
                        0
                      )
                      scale(${item.scale})
                    `,
                                        opacity: item.opacity,
                                        zIndex: item.z,
                                    }}
                                />
                            );
                        })}

                    </div>


                    {/* ARROWS */}
                    <div className="about-arrows">

                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="Previous image"
                        >
                            <span>←</span>
                        </button>

                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <span>→</span>
                        </button>

                    </div>

                </div>


                {/* RIGHT */}
                <div className="about-copy">

                    <p>
                        Welcome to Vikas Builders, where craftsmanship meets
                        innovation in construction.
                    </p>

                    <p>
                        At Vikas Builders, we’re more than just builders;
                        we’re creators of lasting legacies. With a passion
                        for excellence and a commitment to quality, we bring
                        dreams to life, one project at a time.
                    </p>

                    <p>
                        Founded on the principles of integrity, reliability,
                        and unparalleled service, we’ve been serving
                        communities since 1986. Our journey began with a
                        vision to redefine construction by blending
                        traditional expertise with modern techniques, and
                        today, we stand as a beacon of trust in the industry.
                    </p>

                    <p>
                        What sets us apart is our unwavering dedication to
                        customer satisfaction. From concept to completion,
                        we collaborate closely with our clients, understanding
                        their vision and exceeding their expectations. Our
                        skilled team of professionals combines years of
                        experience with innovative solutions, ensuring every
                        project is delivered with precision and perfection.
                    </p>

                </div>

            </div>

        </section>
    );
}