import { useEffect, useRef, useState } from "react";
import "./Milestones.css";

const milestones = [
  {
    value: 200,
    title: "Projects",
  },
  {
    value: 100,
    title: "Expert Engineers",
  },
  {
    value: 600,
    title: "Happy Clients",
  },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <span ref={counterRef}>
      {count}+
    </span>
  );
}

export default function Milestones() {
  return (
    <section className="milestones-section">
      <div className="milestones-container">

        <h2 className="milestones-heading">
          Our Milestones Meter
        </h2>

        <div className="milestones-divider" />

        <div className="milestones-grid">
          {milestones.map((item, index) => (
            <div className="milestone-item" key={index}>

              <div className="milestone-number">
                <Counter value={item.value} />
              </div>

              <div className="milestone-line" />

              <div className="milestone-title">
                {item.title}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}