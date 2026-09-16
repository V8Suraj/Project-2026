import "./MovingText.css";

const words = [
    "SIDE OF THE BOX",
    "DECORATION",
    "INTERIOR DESIGN",
    "ARCHITECTURE",
];

export default function MovingText() {
    return (
        <section className="moving-text-section">
            <div className="moving-text-track">

                {/* First set */}
                {words.map((word, index) => (
                    <span className="moving-text-word" key={`first-${index}`}>
                        {word}
                    </span>
                ))}

                {/* Duplicate set for seamless loop */}
                {words.map((word, index) => (
                    <span className="moving-text-word" key={`second-${index}`}>
                        {word}
                    </span>
                ))}

            </div>
        </section>
    );
}