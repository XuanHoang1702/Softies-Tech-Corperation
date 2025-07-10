import { useRef } from 'react';
import "../styles/css/Careers.css";
import imgOne from '../styles/images/Career01.png';
import imgTwo from '../styles/images/MissionHistory01.png';
import ProgressBarComponent from './Progress-bar.Component';

const CareersComponent = () => {
    const containerRef = useRef(null);
    const dataCard = [
                        {
                            title: "Aerospace Engineer - Mascaon",
                            location: "San Francisco",
                        },
                        {
                            title: "Software Engineer - Avionics",
                            location: "San Francisco",
                        },
                        {
                            title: "Research Scientist - Materials Science",
                            location: "San Francisco",
                        },
                    ]
    return (
        <div className="careers-container" ref={containerRef}>
            <header className="careers-header">
                <h1 className="careers-section-number">03</h1>
                <p className="careers-section-title">Careers</p>
            </header>

            <ProgressBarComponent containerRef={containerRef} />

            <div className="careers-content">
                <div className="careers-image-container">
                    <img
                        src={imgTwo}
                        alt="Abstract geometric shape"
                        className="image-Two-Career"
                    />
                    <img
                        src={imgOne}
                        alt="Abstract geometric shape"
                        className="image-One-Career"
                    />
                </div>

                <div className="careers-cards">
                    {dataCard.map((job, index) => (
                        <div className="careers-card" key={index}>
                            <h2 className="careers-job-title">{job.title}</h2>
                            <p className="careers-job-location">{job.location}</p>
                            <p className="careers-job-description">
                                This is the space to tell people about an open position. Describe the role, its
                                requirements and the qualities the business wants to see in candidates. List the
                                benefits that come with the job and tell interested readers what to include in their
                                applications.
                            </p>
                            <button className="careers-apply-btn">Apply</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CareersComponent;
