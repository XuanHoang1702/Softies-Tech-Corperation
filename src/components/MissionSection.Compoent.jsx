import { useRef } from 'react';
import '../styles/css/MissionSection.css';
import ProgressBarComponent from './Progress-bar.Component';

const MissionSection = () => {
    const containerRef = useRef(null);
    return (
        <div className="mission-container" ref={containerRef}>
            <div className="mission-number">01</div>
            <div className="mission-title">Our Mission</div>

            <ProgressBarComponent containerRef={containerRef} />

            <p className="mission-text">
                We are dedicated to developing cutting-edge technologies that revolutionize the aerospace and defense landscape. We foster a collaborative environment where brilliant minds can solve complex challenges and propel humanity forward.
            </p>
            <button className="mission-button">
                READ MORE
                <svg className="mission-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            </button>
        </div>
    );
};


export default MissionSection;
