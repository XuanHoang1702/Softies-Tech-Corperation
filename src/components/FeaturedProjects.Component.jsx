import { useRef } from 'react';
import '../styles/css/FeaturedProjects.css';
import ProgressBarComponent from './Progress-bar.Component';


const projects = [
  {
    id: '01',
    title: 'Project Sky Guardian',
    desc: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    numberClass: 'project-number bg-orange',
    descClass: 'project-desc black',
    titleClass: 'project-title',
  },
  {
    id: '02',
    title: 'NextGen Fighter Jet Development',
    desc: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    numberClass: 'project-number bg-orange',
    descClass: 'project-desc black',
    titleClass: 'project-title',
  },
  {
    id: '03',
    title: 'Space Debris Removal Technology',
    desc: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    numberClass: 'project-number bg-light-orange',
    descClass: 'project-desc dark-gray',
    titleClass: 'project-title gray',
  },
  {
    id: '04',
    title: 'Hypersonic Missile Defense Systems',
    desc: 'Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.',
    numberClass: 'project-number bg-light-orange',
    descClass: 'project-desc dark-gray',
    titleClass: 'project-title gray',
  },
];

const FeaturedProjects = () => {
  const containerRef = useRef(null);

    return (
        <div className="featured-projects" ref={containerRef}>
        <header>
            <h1 className="featured-projects__header-number">03</h1>
            <p className="featured-projects__header-subtitle">Featured Projects</p>
            <ProgressBarComponent containerRef={containerRef} />
        </header>

        <main className="projects">
            {projects.map(({ id, title, desc, numberClass, descClass, titleClass }) => (
            <section key={id}>
                <div className={numberClass}>{id}</div>
                <h2 className={titleClass}>{title}</h2>
                <p className={descClass}>{desc}</p>
            </section>
            ))}
        </main>

        <button className="read-more-btn" type="button">
            Read More
            <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
            </svg>
        </button>
        </div>
    );
};

export default FeaturedProjects;
