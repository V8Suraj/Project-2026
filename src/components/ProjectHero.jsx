import "./ProjectHero.css";

const projects = [
  {
    title: "Residential-2",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=85",
    link: "/residential",
  },
  {
    title: "Turnkey",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=500&q=85",
    link: "/turnkey",
  },
  {
    title: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=85",
    link: "/commercial",
  },
];

export default function ProjectHero() {
  return (
    <section className="project-hero">

      {/* BACKGROUND IMAGE */}
      <img
        className="project-hero-bg"
        src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90"
        alt="Turnkey luxury residence"
      />

      {/* DARK OVERLAY */}
      <div className="project-hero-overlay" />


      {/* CENTER TITLE */}
      <div className="project-hero-title">
        <h1>Turnkey</h1>
      </div>


      {/* BOTTOM PROJECT CARDS */}
      <div className="project-card-slider">

        <div className="project-card-list">

          {projects.map((project) => (
            <a
              href={project.link}
              className="project-card"
              key={project.title}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <span className="project-card-title">
                {project.title}
              </span>

            </a>
          ))}

        </div>


        {/* SLIDER ARROWS */}
        <div className="project-card-arrows">

          <button
            type="button"
            aria-label="Previous projects"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next projects"
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
}