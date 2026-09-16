import { motion } from "framer-motion";
import "./Careers.css";

const jobs = [
    "Interior Designer",
    "Receptionist",
    "Sales",
    "Accountant",
    "Vendors",
    "Contractors",
];

const revealUp = {
    hidden: {
        opacity: 0,
        y: 40,
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
        x: -50,
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
        x: 50,
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

export default function Careers() {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Application submitted successfully!");
    };

    return (
        <div className="careers-page">

            {/* =================================================
          HERO
      ================================================= */}

            <section className="careers-hero">

                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
                    alt="Vikas Builders careers"
                    className="careers-hero-image"
                />

                <div className="careers-hero-overlay" />

                <motion.div
                    className="careers-hero-content"
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <h1>Careers</h1>

                    <p>Home &gt; Jobs</p>
                </motion.div>

            </section>


            {/* =================================================
          JOBS INTRO
      ================================================= */}

            <section className="careers-jobs">

                <div className="careers-container">

                    <motion.div
                        variants={revealUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="careers-main-title">
                            Jobs at Vikas
                            <br />
                            Builders
                        </h2>

                        <div className="careers-divider" />

                        <h3 className="careers-subtitle">
                            Where careers hit the highs
                        </h3>
                    </motion.div>


                    <motion.p
                        className="careers-description"
                        variants={revealUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            delay: 0.15,
                        }}
                    >
                        Join our dynamic team and embark on a rewarding career in
                        the construction industry. At Vikas Builders, we are
                        dedicated to building not just structures, but also futures.
                        Whether you’re an experienced professional or just starting
                        your career journey, we offer opportunities for growth,
                        learning, and advancement. From skilled tradespeople to
                        project managers, engineers to administrative staff, we are
                        always looking for passionate individuals who share our
                        commitment to quality, safety, and innovation. Explore our
                        current job openings and become part of a collaborative
                        environment where your skills are valued, your ideas are
                        heard, and your potential is nurtured. Join us in shaping
                        the skylines of tomorrow and building a better future,
                        one project at a time.
                    </motion.p>


                    {/* JOB LIST */}

                    <motion.div
                        className="careers-job-list"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.08,
                                },
                            },
                        }}
                    >
                        {jobs.map((job, index) => (
                            <motion.div
                                key={job}
                                className="careers-job-item"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: -20,
                                    },
                                    show: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    },
                                }}
                            >
                                <span>{index + 1}.</span>
                                <p>{job}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

            </section>


            {/* =================================================
          APPLICATION FORM
      ================================================= */}

            <section className="careers-application">

                <div className="careers-form-container">

                    {/* LEFT FORM */}

                    <motion.div
                        className="careers-form-area"
                        variants={revealLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <h2>Please fill the form given below</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="career-field">
                                <label htmlFor="name">
                                    YOUR NAME
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    required
                                />
                            </div>


                            <div className="career-field">
                                <label htmlFor="email">
                                    YOUR EMAIL
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    required
                                />
                            </div>


                            <div className="career-field">
                                <label htmlFor="contact">
                                    YOUR CONTACT NUMBER
                                </label>

                                <input
                                    id="contact"
                                    type="tel"
                                    required
                                />
                            </div>


                            <div className="career-field">
                                <label htmlFor="resume">
                                    YOUR RESUME/CV
                                </label>

                                <input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    required
                                />
                            </div>


                            <div className="career-field">
                                <label htmlFor="message">
                                    YOUR MESSAGE (OPTIONAL)
                                </label>

                                <textarea
                                    id="message"
                                    rows="8"
                                />
                            </div>


                            <button
                                type="submit"
                                className="career-submit"
                            >
                                SUBMIT
                            </button>

                        </form>
                    </motion.div>


                    {/* RIGHT IMAGE */}

                    <motion.div
                        className="careers-form-image"
                        variants={revealRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90"
                            alt="Construction professional"
                        />
                    </motion.div>

                </div>

            </section>

        </div>
    );
}