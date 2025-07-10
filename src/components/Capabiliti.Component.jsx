import { useEffect, useRef } from 'react';
import '../styles/css/Capabiliti.css';
import ProgressBarComponent from './Progress-bar.Component';

const capabilitiesData = [
  {
    id: 1,
    title: 'Aerodynamics & Propulsion',
    description: 'Optimizing aircraft and spacecraft design for superior performance and efficiency.',
  },
  {
    id: 2,
    title: 'Navigation & Control',
    description: 'Precision in trajectory and orientation across dynamic flight conditions.',
  },
  {
    id: 3,
    title: 'Structural Analysis',
    description: 'Designing lightweight yet robust structures for aerospace systems.',
  },
  {
    id: 4,
    title: 'Thermal Systems',
    description: 'Ensuring temperature regulation for optimal operation and safety.',
  },
  {
    id: 5,
    title: 'Power Management',
    description: 'Efficient energy generation, storage, and distribution in aerospace.',
  },
  {
    id: 6,
    title: 'Communication Systems',
    description: 'Reliable high-speed data transfer across airborne and space platforms.',
  },
];

const CapabilitiComponent = () => {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
            });
        },
        { threshold: 0.1 }
        );

        cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => {
        cardRefs.current.forEach((ref) => {
            if (ref) observer.unobserve(ref);
        });
        };
    }, []);

    return (
        <div className="capabilities-container" ref={containerRef}>
        <header className="capabilities-header">
            <h1 className="capabilities-section-number">01</h1>
            <p className="capabilities-section-title">Capabilities</p>
        </header>
        <ProgressBarComponent containerRef={containerRef} />
        <div className="capabilities-content">
            {capabilitiesData.map((item, index) => (
            <div
                className="capability-card hidden-card"
                key={item.id}
                ref={(el) => (cardRefs.current[index] = el)}
            >
                <div className="capability-badge">0{item.id}</div>
                <h1 className="capability-title">{item.title}</h1>
                <p className="capability-description">{item.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default CapabilitiComponent;
