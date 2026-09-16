import "./ProjectsIntro.css";

export default function ProjectsIntro() {
  return (
    <section className="projects-intro">

      <div className="projects-intro-container">

        {/* TOP RIGHT LINK */}
        {/* <div className="projects-intro-link">
          <a href="#projects">
            <span>Latest Projects</span>
            <span className="projects-arrow">↗</span>
          </a>
        </div> */}

        {/* MAIN HEADING */}
        <h1 className="projects-intro-title">
          Explore our newest
          <br />
          projects
        </h1>

        {/* DIVIDER */}
        <div className="projects-intro-divider"></div>

        {/* SUBTITLE */}
        <h2 className="projects-intro-subtitle">
          Designing the Extraordinary, Project by Project
        </h2>

      </div>

    </section>
  );
}