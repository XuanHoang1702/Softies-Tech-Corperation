import { useEffect, useRef } from "react";
import "../styles/css/Capabilities.css";

const capabilities = [
    "Aerodynamics & Propulsion",
    "Avionics & Control Systems",
    "Materials Science & Structures",
    "Artificial Intelligence & Robotics",
    "Cybersecurity & Data Protection",
];

export default function Capabilities() {
    const itemsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
        itemsRef.current.forEach((el) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const distanceToCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
            const minScale = 0.85;
            const maxScale = 1;
            const scale = Math.max(minScale, maxScale - distanceToCenter / (windowHeight / 2) * 0.15);

            el.style.transform = `scale(${scale})`;
            el.style.zIndex = scale >= 0.99 ? 1 : 0;
        });
    };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial call
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="capabilities-container">
            <div className="capabilities-header">
                <p className="capabilities-number">04</p>
                <div>
                <p className="capabilities-title">Capabilities</p>
                <hr className="capabilities-divider" />
                </div>
            </div>

            <ul className="capabilities-list">
                {capabilities.map((text, index) => (
                <li
                    key={index}
                    ref={(el) => (itemsRef.current[index] = el)}
                    className="capabilities-item transition-transform duration-300"
                >
                    <span className="capabilities-item-number">{`0${index + 1}`}</span>
                    <span className="capabilities-item-text">{text}</span>
                </li>
                ))} 
            </ul>

            <button className="read-more-button">
                <span>Read More</span>
                <svg
                className="read-more-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
