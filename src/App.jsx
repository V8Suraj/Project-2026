import { useState } from "react";
import Milestones from "./components/Milestones";
import MovingText from "./components/MovingText";
import About from "./components/About";
import Specialties from "./components/Specialties";
import HowWeWork from "./components/HowWeWork";
import InteriorWork from "./components/InteriorWork";
import ProjectsIntro from "./components/ProjectsIntro";
import ProjectHero from "./components/ProjectHero";
import ContactIntro from "./components/ContactIntro";
import ProjectContact from "./ProjectContact";
import AboutHero from "./components/AboutHero";
import Aboutus from "./components/Aboutus";
import "./App.css";
import AboutStory from "./components/AboutStory";
import Showcase from "./components/Showcase";
import Careers from "./components/Careers";
import ProjectsIntro3 from "./components/ProjectsIntro3";
// import ProjectHero from "./components/ProjectHero";
import ProjectsHero from "./components/ProjectsHero";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
// import Gallery from "./components/Gallery";
import ContactIntro1 from "./components/contactintro1";
// import complogo from "./assets/images/complogo.jpg"
import complogo from "./assets/images/complogo.jpeg";
function SearchIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex h-full items-center">
   <div className="flex h-full items-center border-r border-white/30 px-7 lg:px-9">
  <img
    src={complogo}
    alt="Vikas Builders"
    className="h-[52px] w-auto object-contain lg:h-[58px]"
  />
</div>

      {/* Vikas Builders */}
      <div className="flex flex-col justify-center px-5 lg:px-7">
        <span className="font-serif text-[24px] tracking-[0.08em] text-white lg:text-[26px]">
          UGRATARA ELITE 
        </span>

        <span className="font-serif text-[13px] tracking-[0.22em] text-white/90 lg:text-[14px]">
          BUILD PVT LTD
        </span>
      </div>
    </div>
  );
}

const navItems = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Careers" },
  { name: "Projects", dropdown: true },
  { name: "Gallery" },
  { name: "Contact Us" },
];

function Navbar({ currentPage, setCurrentPage }) {
  const [active, setActive] = useState(
  currentPage === "about"
    ? "About Us"
    : currentPage === "careers"
      ? "Careers"
      : currentPage === "projects"
        ? "Projects"
        : currentPage === "gallery"
          ? "Gallery"
          : "Home"
);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (page, name) => {
    setActive(name);
    setMobileOpen(false);

    if (page === currentPage) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full text-white">

        <div className="mx-auto max-w-[1400px] px-0 lg:px-8">

          <div className="flex h-[84px] items-center border-b border-white/25 bg-[#302117]/95 backdrop-blur-[2px]">

            {/* =========================
                LOGO
            ========================== */}

            <div className="hidden h-full shrink-0 lg:block">
              <Logo />
            </div>


            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}

            <nav className="ml-auto hidden h-full items-stretch lg:flex">

              {navItems.map((item) => {
                const isActive = active === item.name;

                return (
                  <div
                    key={item.name}
                    className="group relative h-full"
                    onMouseEnter={() => setActive(item.name)}
                  >

                    <button
                      type="button"
                      onClick={() => {

                        if (item.name === "Home") {
                          handleNavigation("home", "Home");
                        }

                        if (item.name === "About Us") {
                          handleNavigation("about", "About Us");
                        }

                        if (item.name === "Careers") {
                          handleNavigation("careers", "Careers");
                        }

                        if (item.name === "Projects") {
                          handleNavigation("projects", "Projects");
                        }

                          if (item.name === "Gallery") {
                            handleNavigation("gallery", "Gallery");
                          }

                       if (item.name === "Contact Us") {
  handleNavigation("contact", "Contact Us");
}
                      }}
                      className={`
                        relative flex h-full cursor-pointer
                        items-center gap-2 px-5
                        text-[16px] font-semibold
                        transition-all duration-300
                        lg:px-5 xl:px-6

                        ${isActive
                          ? "text-white"
                          : "text-white/95 hover:text-white"
                        }
                      `}
                    >

                      {/* Animated background */}
                      <span
                        className={`
                          absolute inset-0 -z-10
                          bg-[#914500]

                          transition-all duration-500
                          ease-[cubic-bezier(.22,1,.36,1)]

                          ${isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-[-100%] opacity-0"
                          }
                        `}
                      />

                      {/* Bottom extension */}
                      <span
                        className={`
                          absolute bottom-[-9px]
                          left-1/2
                          h-[10px]
                          w-[42px]
                          -translate-x-1/2
                          bg-[#914500]

                          transition-all duration-500

                          ${isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                          }
                        `}
                      />

                      <span className="relative z-10 whitespace-nowrap">
                        {item.name}
                      </span>

                      {item.dropdown && (
                        <span className="relative z-10 transition-transform duration-300 group-hover:rotate-180">
                          <ChevronDown />
                        </span>
                      )}

                    </button>


                    {/* =========================
                        PROJECTS DROPDOWN
                    ========================== */}

                    {item.dropdown && (
                      <div
                        className="
                          invisible absolute left-0 top-full
                          w-[210px]
                          translate-y-3
                          bg-[#302117]
                          opacity-0
                          shadow-2xl

                          transition-all duration-300

                          group-hover:visible
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >

                        <button
                          type="button"
                          onClick={() => {
                            handleNavigation(
                              "projects",
                              "Projects"
                            );
                          }}
                          className="
                            flex w-full cursor-pointer
                            items-center
                            px-5 py-4
                            text-left text-white
                            transition-colors
                            hover:bg-[#914500]
                          "
                        >
                          All Projects
                        </button>


                        <button
                          type="button"
                          onClick={() => {
                            handleNavigation(
                              "projects",
                              "Projects"
                            );
                          }}
                          className="
                            flex w-full cursor-pointer
                            items-center
                            px-5 py-4
                            text-left text-white
                            transition-colors
                            hover:bg-[#914500]
                          "
                        >
                          Residential
                        </button>


                        <button
                          type="button"
                          onClick={() => {
                            handleNavigation(
                              "projects",
                              "Projects"
                            );
                          }}
                          className="
                            flex w-full cursor-pointer
                            items-center
                            px-5 py-4
                            text-left text-white
                            transition-colors
                            hover:bg-[#914500]
                          "
                        >
                          Turnkey
                        </button>


                        <button
                          type="button"
                          onClick={() => {
                            handleNavigation(
                              "projects",
                              "Projects"
                            );
                          }}
                          className="
                            flex w-full cursor-pointer
                            items-center
                            px-5 py-4
                            text-left text-white
                            transition-colors
                            hover:bg-[#914500]
                          "
                        >
                          Commercial
                        </button>

                      </div>
                    )}

                  </div>
                );
              })}


              {/* =========================
                  SEARCH
              ========================== */}

              <button
                type="button"
                aria-label="Search"
                className="
                  flex h-full
                  cursor-pointer
                  items-center
                  px-5
                  text-white
                  transition-all duration-300
                  hover:bg-[#914500]
                "
              >
                <SearchIcon />
              </button>

            </nav>


            {/* =========================
                MOBILE HEADER
            ========================== */}

            <div className="flex w-full items-center justify-between px-5 lg:hidden">

              <Logo />

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="
                  flex h-12 w-12
                  cursor-pointer
                  items-center
                  justify-center
                "
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <CloseIcon />
                ) : (
                  <MenuIcon />
                )}
              </button>

            </div>

          </div>
        </div>


        {/* =========================
            MOBILE MENU
        ========================== */}

        <div
          className={`
            overflow-hidden
            bg-[#302117]
            transition-all duration-500
            lg:hidden

            ${mobileOpen
              ? "max-h-[700px] border-b border-white/20"
              : "max-h-0"
            }
          `}
        >

          <nav className="flex flex-col">

            {navItems.map((item, index) => {

              const isActive = active === item.name;

              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => {

                    if (item.name === "Home") {
                      handleNavigation("home", "Home");
                    }

                    if (item.name === "About Us") {
                      handleNavigation(
                        "about",
                        "About Us"
                      );
                    }

                    if (item.name === "Careers") {
                      handleNavigation(
                        "careers",
                        "Careers"
                      );
                    }

                    if (item.name === "Projects") {
                      handleNavigation(
                        "projects",
                        "Projects"
                      );
                    }

                      if (item.name === "Gallery") {
                    handleNavigation("gallery", "Gallery");
                  }

                  }}
                  className={`
                    flex cursor-pointer
                    items-center
                    justify-between

                    border-b
                    border-white/10

                    px-7 py-5

                    text-left
                    text-[16px]
                    font-semibold

                    transition-all duration-300

                    ${isActive
                      ? "bg-[#914500]"
                      : "hover:bg-[#5e300e]"
                    }
                  `}
                  style={{
                    transitionDelay: mobileOpen
                      ? `${index * 35}ms`
                      : "0ms",
                  }}
                >

                  {item.name}

                  {item.dropdown && (
                    <ChevronDown />
                  )}

                </button>
              );
            })}


            {/* MOBILE SEARCH */}

            <button
              type="button"
              className="
                flex
                cursor-pointer
                items-center
                gap-3
                px-7 py-5
                text-left
              "
            >
              <SearchIcon />
              <span>Search</span>
            </button>

          </nav>

        </div>

      </header>
    </>
  );
}

function AnniversaryBanner() {
  return (
    <div className="absolute left-0 right-0 top-[84px] z-40 bg-[#332217]">
      <div className="mx-auto flex h-[112px] max-w-[1400px] items-center justify-center gap-7 overflow-hidden px-5 lg:h-[114px]">

        {/* Anniversary badge */}
        <div className="hidden h-[105px] w-[150px] shrink-0 items-center justify-center md:flex">
          <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] border-[#d6a934]">
            <div className="absolute inset-[5px] rounded-full border border-[#f1d56c]" />

            <div className="text-center">
              <div className="font-serif text-[32px] font-bold leading-none text-[#e6bd45]">
                40
              </div>

              <div className="mt-1 text-[9px] font-bold tracking-[0.12em] text-[#f2d46d]">
                YEARS
              </div>

              <div className="text-[7px] font-bold tracking-[0.08em] text-[#f2d46d]">
                ANNIVERSARY
              </div>
            </div>
          </div>
        </div>

        {/* Banner text */}
        <div className="text-center">
          <h1 className="font-sans text-[27px] font-semibold leading-tight tracking-[-0.02em] text-[#f2d76c] sm:text-[34px] lg:text-[43px]">
            From Blueprints to Masterpieces
          </h1>

          <p className="mt-1 font-sans text-[22px] font-semibold leading-tight text-[#f2d76c] sm:text-[29px] lg:text-[40px]">
            40 Years of Real Estate Excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#241a13]">

      {/* Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
        alt="Luxury interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center pt-[170px]">
        <div className="max-w-[750px] px-6 text-center">
          <h2 className="text-[48px] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-[62px] md:text-[76px] lg:text-[88px]">
            Explore luxury-
            <br />
            filled living
          </h2>
        </div>
      </div>

      {/* Right arrows */}
      <div className="absolute right-[5%] top-[68%] hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <button className="flex h-[56px] w-[56px] items-center justify-center border border-white/80 text-white transition-all duration-300 hover:bg-white hover:text-black">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button className="flex h-[56px] w-[56px] items-center justify-center border border-white/80 text-white transition-all duration-300 hover:bg-white hover:text-black">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = (page) => {
    if (page === currentPage) return;

    setIsLoading(true);

    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 800);
  };

  return (
    <main className="relative min-h-screen bg-[#302117]">

      {/* PAGE LOADER */}
      {isLoading && (
        <div className="page-loader">
          <div className="spinner"></div>
        </div>
      )}


      {/* HEADER ALWAYS VISIBLE */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
      />


      {/* HOME */}
      {currentPage === "home" && (
        <>
          <AnniversaryBanner />
          <Hero />
          <Milestones />
          <MovingText />
          <About />
          <Specialties />
          <HowWeWork />
          <InteriorWork />
          <ProjectsIntro />
          <ProjectHero />
          <ContactIntro />
          <ProjectContact />
        </>
      )}


      {/* ABOUT */}
      {currentPage === "about" && (
        <>
          <AboutHero />
          <Aboutus />
          <AboutStory />
          <Showcase />
          <ContactIntro />
          <ProjectContact />
        </>
      )}

      {
        currentPage === "careers" && (
          <>
            <Careers />
            <Showcase />
            <ContactIntro />
            <ProjectContact />

          </>
        )
      }

      {currentPage === "projects" && (
        <>
          <ProjectsHero/>
          <ProjectsIntro3 />
          <Showcase/>
          <ContactIntro/>
          <ProjectContact/>
        </>
      )

      }

    {currentPage === "gallery" && (
      <>
      <Gallery />
      <ContactIntro/>
      <ProjectContact/>
      </>
)}     


{currentPage === "contact" && (
  <>
    {/* <ContactIntro /> */}

    <ContactIntro1/>
    <ContactForm />
    <ProjectContact />
  </>
)}

    </main>
  );
}



export default App;