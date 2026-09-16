import { useEffect, useState } from "react";
import "./InteriorWork.css";

const projects = [
    {
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    },
    {
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    },
    {
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90",
    },
    {
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
    },
    {
        image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
    },
    {
        image:
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=90",
    },
];

export default function InteriorWork() {
    const [active, setActive] = useState(0);

    const nextProject = () => {
        setActive((prev) => (prev + 1) % projects.length);
    };

    const previousProject = () => {
        setActive(
            (prev) => (prev - 1 + projects.length) % projects.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextProject();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Creates an infinite circular list
    const visibleProjects = Array.from(
        { length: 5 },
        (_, index) =>
            projects[
            (active + index - 2 + projects.length) %
            projects.length
            ]
    );

    return (
        <section className="interior-work">

            <div className="interior-work-container">

                {/* ================= HEADING ================= */}

                <div className="interior-work-heading">
                    <h2>Our Interior Work</h2>

                    <div className="interior-work-divider" />
                </div>


                {/* ================= CAROUSEL ================= */}

                <div className="interior-carousel">

                    <div
                        className="interior-track"
                        key={active}
                    >
                        {visibleProjects.map((project, index) => (
                            <div
                                className={`interior-card ${index === 2 ? "center-card" : ""
                                    }`}
                                key={`${project.image}-${index}`}
                            >
                                <img
                                    src={project.image}
                                    alt="Interior project"
                                />

                                {/* Arrows on outer cards */}
                                {index === 0 && (
                                    <button
                                        className="carousel-arrow left-arrow"
                                        onClick={previousProject}
                                        aria-label="Previous project"
                                    >
                                        ←
                                    </button>
                                )}

                                {index === 4 && (
                                    <button
                                        className="carousel-arrow right-arrow"
                                        onClick={nextProject}
                                        aria-label="Next project"
                                    >
                                        →
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                </div>


                {/* ================= BOTTOM LINK ================= */}

                <div className="latest-projects">
                    <a href="#projects">
                        Latest Projects
                        <span>↗</span>
                    </a>
                </div>

            </div>

        </section>
    );
}