import { useEffect, useRef, useState } from 'react';
import '../styles/css/ResearchTechnologySection.css';
import HexagonComponent from './Hexagon.Component';
import ProgressBarComponent from './Progress-bar.Component';

const ResearchTechnologySection = () => {
    const containerRef = useRef(null);
    const [visibleCards, setVisibleCards] = useState([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setVisibleCards(prev => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
                });
            }
            });
        },
        {
            threshold: 0.6, // trigger when ~60% visible
        }
        );

        cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const cards = [
        {
            number: '01',
            title: 'Outsource',
            text: 'We provide high-quality software outsourcing services to help clients save costs, accelerate development, and focus on their core business.'
        },
        {
            number: '02',
            title: 'Automation',
            text: 'Describe the service and how customers or clients can benefit from it...'
        },
        {
        number: '03',
        title: 'Advanced Materials for Defense Applications',
        text: 'Describe the service and how customers or clients can benefit from it...'
        }
    ];

    return (
        <div className="section-container" ref={containerRef}>
            <header className="section-header">
                <h2 className="section-number">02</h2>
                <p className="section-title">Research & Technology</p>
                <ProgressBarComponent containerRef={containerRef} />
            </header>

            <div className="section-content">
                <div className="image-container">
                    <HexagonComponent />
                </div>

                <div className="cards-container">
                    {cards.map((card, idx) => (
                        <article
                            key={idx}
                            ref={el => (cardRefs.current[idx] = el)}
                            className={`info-card fade-in-card ${visibleCards[idx] ? 'visible' : ''}`}
                        >
                        <div className="card-badge">{card.number}</div>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-text">{card.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchTechnologySection;
