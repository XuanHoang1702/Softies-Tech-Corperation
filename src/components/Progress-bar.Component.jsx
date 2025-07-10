import { useEffect, useRef } from 'react';
import '../styles/css/Progress-bar.css';

const ProgressBarComponent = ({ containerRef }) => {
    const dotRef = useRef(null);
    const barRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !barRef.current || !dotRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top >= windowHeight || top + height <= 0) {
                dotRef.current.style.left = `0px`;
                return;
            }

            const scrollTop = window.scrollY + windowHeight - containerRef.current.offsetTop;
            const scrollPercent = Math.min(1, Math.max(0, scrollTop / height));

            const barWidth = barRef.current.offsetWidth;
            const dotPosition = scrollPercent * barWidth;
            dotRef.current.style.left = `${dotPosition}px`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [containerRef]);

    return (
        <div className="custom-progress-bar-container" ref={barRef}>
            <div className="dot" ref={dotRef}></div>
        </div>
    );
};

export default ProgressBarComponent;
