import "./HowWeWork.css";
const steps = [
    {
        number: "1.",
        title: "Understanding Client’s Requirement",
        icon: "brain",
    },
    {
        number: "2.",
        title: "Project Study",
        icon: "project",
    },
    {
        number: "3.",
        title: "Providing Best Solution",
        icon: "bulb",
    },
    {
        number: "4.",
        title: "Assistance in Selection",
        icon: "chat",
    },
    {
        number: "5.",
        title: "Mutual Consent to Proceed",
        icon: "handshake",
    },
    {
        number: "6.",
        title: "Booking the Property",
        icon: "document",
    },
    {
        number: "7.",
        title: "On Time Delivery",
        icon: "time",
    },
    {
        number: "8.",
        title: "After Sales Service",
        icon: "deal",
    },
];

function StepIcon({ type }) {
    if (type === "brain") {
        return (
            <svg viewBox="0 0 64 64" className="how-work-icon">
                <path
                    d="M28 9C19 8 12 14 12 23c-6 2-8 10-4 15-3 7 2 14 9 15 2 8 10 9 15 5V14c-1-3-2-4-4-5Z"
                    fill="currentColor"
                />
                <path
                    d="M36 9c9-1 16 5 16 14 6 2 8 10 4 15 3 7-2 14-9 15-2 8-10 9-15 5V14c1-3 2-4 4-5Z"
                    fill="currentColor"
                />
                <path
                    d="M31 17v31M20 22c3 1 5 3 5 6M19 36c3-1 6 0 8 3M44 22c-3 1-5 3-5 6M45 36c-3-1-6 0-8 3"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity=".28"
                />
            </svg>
        );
    }

    if (type === "project") {
        return (
            <svg viewBox="0 0 64 64" className="how-work-icon">
                <rect x="10" y="10" width="14" height="14" rx="2" fill="currentColor" />
                <rect x="40" y="10" width="14" height="14" rx="2" fill="currentColor" />
                <rect x="25" y="40" width="14" height="14" rx="2" fill="currentColor" />

                <path
                    d="M24 17h16M32 24v16"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (type === "bulb") {
        return (
            <svg viewBox="0 0 64 64" className="how-work-icon">
                <path
                    d="M32 7c-13 0-22 9-22 21 0 8 4 12 8 17 2 2 3 5 3 8h22c0-3 1-6 3-8 4-5 8-9 8-17C54 16 45 7 32 7Z"
                    fill="currentColor"
                />

                <path
                    d="M24 56h16M25 51h14"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                <path
                    d="M22 27c1-6 5-9 10-10"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity=".65"
                />
            </svg>
        );
    }

    if (type === "chat") {
        return (
            <svg viewBox="0 0 64 64" className="how-work-icon">
                <path
                    d="M8 18c0-7 7-11 17-11h7c10 0 17 4 17 11s-7 11-17 11H23l-9 7 2-8C11 26 8 23 8 18Z"
                    fill="currentColor"
                />

                <path
                    d="M29 36c0-6 6-10 14-10h5c8 0 12 4 12 9 0 4-3 7-7 9l2 6-8-5h-5c-8 0-13-3-13-9Z"
                    fill="currentColor"
                    opacity=".8"
                />
            </svg>
        );
    }

    if (type === "handshake") {
        return (
            <svg viewBox="0 0 64 64" className="how-work-icon">
                <path
                    d="M8 27l11-9h10l7 6 7-5h10l11 9-7 15-10-5-8 7-8-7-9 5-14-16Z"
                    fill="currentColor"
                />

                <path
                    d="M24 29l7 6 4-3 7 6"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity=".7"
                />
            </svg>
        );
    }

    if (type === "document") {
        return (
            <svg viewBox="0 0 64 64" className="how-work-icon">
                <path
                    d="M15 7h29l8 8v42H15z"
                    fill="currentColor"
                />

                <path
                    d="M44 7v10h9"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    opacity=".35"
                />

                <path
                    d="M22 25h22M22 34h22M22 43h14"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity=".7"
                />
            </svg>
        );
    }

    if (type === "time") {
        return (
            <svg viewBox="0 0 64 64" className="how-work-icon">
                <circle
                    cx="38"
                    cy="31"
                    r="17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                />

                <path
                    d="M38 22v10l6 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                <path
                    d="M12 39c3 7 9 11 16 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                <path
                    d="M17 34l-7 3 5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" className="how-work-icon">
            <path
                d="M10 25l9-8 12 11 8-6 15 9-5 8-10-4-7 8-8-7-7 4-12-15Z"
                fill="currentColor"
            />

            <path
                d="M35 24l8-7 10 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
            />

            <path
                d="M27 33l7 7M36 29l7 7"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                opacity=".5"
            />
        </svg>
    );
}

export default function HowWeWork() {
    return (
        <section className="how-we-work">

            <div className="how-work-container">

                {/* Heading */}
                <div className="how-work-heading">
                    <h2>How We Work</h2>
                    <div className="how-work-divider" />

                    <p>
                        Driven by passion. Focused on client’s satisfaction.
                    </p>
                </div>


                {/* Steps */}
                <div className="how-work-steps">

                    {steps.map((step, index) => (
                        <div className="how-work-item" key={step.number}>

                            {/* connector */}
                            {index !== 0 && (
                                <div className="how-work-connector" />
                            )}

                            {/* icon area */}
                            <div className="how-work-icon-wrap">

                                <StepIcon type={step.icon} />

                                <span className="how-work-number">
                                    {step.number}
                                </span>

                            </div>

                            {/* title */}
                            <p className="how-work-step-title">
                                {step.title}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}