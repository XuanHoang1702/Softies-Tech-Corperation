import { useRef } from "react";
import "../styles/css/PressSection.css";
import ProgressBarComponent from './Progress-bar.Component';

const PressSection = () => {
    const containerRef = useRef(null);
    return (
        <div className="press-section" ref={containerRef}>
            <header>
                <h1 className="press-section__header-number">05</h1>
                <p className="press-section__header-subtitle">Press</p>
                <ProgressBarComponent containerRef={containerRef} />
            </header>

            <div className="press-wrapper">
                <button className="arrow-btn" aria-label="Previous">←</button>
                <div className="press-content">
                    <section className="press-item">
                        <div className="press-number bg-light-orange">Read the full article →</div>
                        <div className="line"></div>
                        <div className="press-meta">By John Doe</div>
                        <div className="press-meta">June 5, 2025</div>
                        <p className="press-desc">
                            Industry Experts Praise Orbits Technologies's Role in Advancing Defense Technologies.
                        </p>
                    </section>

                    <section className="press-item">
                        <div className="press-number bg-light-orange">Read the full article →</div>
                        <div className="line"></div>
                        
                        <div className="press-meta">By Jane Smith</div>
                        <div className="press-meta">May 30, 2025</div>
                        <p className="press-desc">
                            Leading universities collaborate with top tech companies on Autonomous Spacecraft Research.
                        </p>
                    </section>
                </div>
                <button className="arrow-btn" aria-label="Next">→</button>
            </div>
        </div>
    );
};

export default PressSection;
