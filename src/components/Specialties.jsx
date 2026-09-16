import { useEffect, useState } from "react";
import "./Specialties.css";

const specialties = [
  {
    title: "Interior Design",
    text: "At Vikas Builders, our interior design services focus on creating spaces that are not only aesthetically pleasing but also functional and comfortable. We believe in tailoring each design to reflect the unique personality and needs of our clients. From selecting the perfect colour palette to choosing furniture and accessories that complement the space, our team of experienced designers works closely with clients to bring their vision to life. Whether it’s a cozy residential home or a dynamic commercial space, we strive to create interiors that inspire and delight.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Residential Design",
    text: "We design sophisticated residential spaces that balance comfort, functionality and timeless aesthetics. Every detail is carefully considered to create homes that feel personal, elegant and welcoming. Our approach combines thoughtful planning, premium materials and modern design principles to create spaces that truly reflect the people who live in them.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Commercial Spaces",
    text: "Our commercial design solutions are created to improve the way people experience and use a space. From offices and showrooms to hospitality environments, we combine strong visual identity with practical planning to create environments that are efficient, impressive and memorable.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Luxury Living",
    text: "Luxury is all about detail, proportion and craftsmanship. We create premium living environments using carefully selected materials, sophisticated lighting and refined architectural elements. The result is a space that feels luxurious without losing warmth or functionality.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=90",
  },
];

export default function Specialties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");

    setActiveIndex((prev) => {
      return (prev + 1) % specialties.length;
    });
  };

  const previousSlide = () => {
    setDirection("prev");

    setActiveIndex((prev) => {
      return (
        (prev - 1 + specialties.length) %
        specialties.length
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = specialties[activeIndex];

  return (
    <section className="specialties-section">

      {/* HEADING */}
      <div className="specialties-container">

        <div className="specialties-heading">
          <h1>Our Specialties</h1>
          <div className="specialties-divider"></div>
        </div>


        {/* MAIN CONTENT */}
        <div className="specialties-content">

          {/* LEFT TEXT */}
          <div className="specialties-copy">

            <h2 key={`title-${activeIndex}`}>
              {current.title}
            </h2>

            <p key={`text-${activeIndex}`}>
              {current.text}
            </p>

          </div>


          {/* RIGHT IMAGE */}
          <div className="specialties-image-area">

            <div className="specialties-image-wrapper">

              <img
                key={`image-${activeIndex}`}
                src={current.image}
                alt={current.title}
                className={`specialties-image ${direction}`}
              />

            </div>


            {/* ARROWS */}
            <div className="specialties-arrows">

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous specialty"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next specialty"
              >
                ›
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}