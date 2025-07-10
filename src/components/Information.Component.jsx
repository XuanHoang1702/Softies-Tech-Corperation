import { useRef } from 'react';
import "../styles/css/Information.css";
import imgOne from '../styles/images/Information01.png';
import imgTwo from '../styles/images/Information02.png';
import imgThree from '../styles/images/Information03.png';
import ProgressBarComponent from './Progress-bar.Component';

const InformationComponent = () => {
    const containerRef = useRef(null);
    return (
        <div className="information-container" ref={containerRef}>
            <header className="information-header">
                <h1 className="information-section-number">02</h1>
                <p className="information-section-title">8mosphere Technologies By The Numbers</p>
                <ProgressBarComponent containerRef={containerRef} />
            </header>
            <main>
                <div className="information-content-box">
                    <div className='information-image-container'>
                        <img
                        className="image-One"
                        src={imgOne}
                        alt="Mission"
                        />
                        <img
                            className="image-Two"
                            src={imgTwo}
                            alt="Mission"
                        />
                        <img
                            className="image-Three"
                            src={imgThree}
                            alt="Mission"
                        />
                    </div>
                    <div className="information-text-box">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h2 className="stat-number">30</h2>
                                <h3 className="stat-title">Years of Experience</h3>
                                <p className="stat-description">
                                A proven track record of success in aerospace and defense R&amp;D.
                                </p>
                            </div>
                            <div className="stat-card">
                                <h2 className="stat-number">80</h2>
                                <h3 className="stat-title">Ongoing Projects</h3>
                                <p className="stat-description">
                                Actively engaged in driving innovation across diverse areas.
                                </p>
                            </div>
                            <div className="stat-card">
                                <h2 className="stat-number gray">15</h2>
                                <h3 className="stat-title gray">Patents Awarded</h3>
                                <p className="stat-description light-gray">
                                Recognition for groundbreaking technological advancements.
                                </p>
                            </div>
                            <div className="stat-card">
                                <h2 className="stat-number gray">2.5K</h2>
                                <h3 className="stat-title gray">Talented Employees</h3>
                                <p className="stat-description light-gray">
                                A team of passionate and skilled engineers, scientists, and researchers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default InformationComponent;
