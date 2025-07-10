import { useRef } from 'react';
import '../styles/css/Feature.css';
import ProgressBarComponent from './Progress-bar.Component';

const projectData = [
  {
    id: 1,
    title: 'Project Sky Guardian',
    badge: '01',
    description:
      'Describe the service and how customers or clients can benefit from it. Add short description with pricing, duration and booking details.',
  },
  {
    id: 2,
    title: 'Lunar Comms Array',
    badge: '02',
    description:
      'Advanced satellite communication setup enabling stable data across moon missions.',
  },
  {
    id: 3,
    title: 'Solar Drone Scout',
    badge: '03',
    description:
      'Autonomous aerial drone powered by solar energy for surveillance in harsh zones.',
  },
  {
    id: 4,
    title: 'Hyperloop Freight',
    badge: '04',
    description:
      'Next-gen high-speed underground freight transport for faster logistics.',
  },
  {
    id: 5,
    title: 'Orbital Mapping AI',
    badge: '05',
    description:
      'AI-powered mapping satellite for real-time planetary surface analysis.',
  },
  {
    id: 6,
    title: 'Mars Habitat Core',
    badge: '06',
    description:
      'Prototype of self-sustaining human habitat for Mars colonization.',
  },
];

const FeatureComponent = () => {
    const containerRef = useRef(null);

    return (
        <div className="feature-container" ref={containerRef}>
        <header className="feature-header">
            <h1 className="feature-section-number">02</h1>
            <p className="feature-section-title">Featured Projects</p>
        </header>
        <ProgressBarComponent containerRef={containerRef} />
        <div className="feature-content">
            <div className="feature-grid">
            {projectData.map((item) => (
                <div className="feature-card" key={item.id}>
                <div className="feature-badge">{item.badge}</div>
                <h1 className="feature-title">{item.title}</h1>
                <p className="feature-description">{item.description}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default FeatureComponent;
