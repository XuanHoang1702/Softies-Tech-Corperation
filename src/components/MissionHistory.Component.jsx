import { useRef } from 'react';
import '../styles/css/MissionHistory.css';
import imgOne from '../styles/images/MissionHistory01.png';
import imgTwo from '../styles/images/MissionHistory02.png';
import ProgressBarComponent from './Progress-bar.Component';

function MissionHistory() {
    const containerRef = useRef(null);
    return (
        <div className="mission-history-container" ref={containerRef}>
        <header className="mission-history-header">
            <h1 className="mission-history-section-number">01</h1>
            <p className="mission-history-section-title">Mission &amp; History</p>
            <ProgressBarComponent containerRef={containerRef} />
        </header>

        <main>
            <div className="mission-history-content-box">
                <div className="mission-history-image-container">
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
                </div>
                <div className="mission-history-text-box">
                    <p>
                    This is a space to share more about the business. Take advantage of this long text to tell people who's behind it, what it does, how it began, and other details. It's an excellent place to share the story behind the business and describe what this site has to offer its visitors.
                    </p>
                    <p>
                    You can write about the business's history here, from its founding until now. Draw readers in with an engaging narrative. By telling its story, you can help people connect to the business. Share what inspired its creation and what need it was meant to fill. You can include details of the obstacles it overcame to get where it is today.
                    </p>
                    <p>
                    This space is also a good spot to talk about a particular feature of the business that sets it apart from its competitors. Explain to readers what makes this business unique and why they should choose it over other options. Focus on the value this business can offer its users.
                    </p>
                    <p>
                    Let visitors to this website know that they'll find what they're looking for right here. Present the business as the solution to a specific problem and highlight the ways the business's products or services can make life better for people.
                    </p>
                    <p>
                    Outline the business's mission and core values. Describe the principles that drive its work and the standards it upholds. In a few words, explain the impact this business has had, or hopes to have, on its community and the world.
                    </p>
                    <p>
                    Tell readers how the business puts its users first. Emphasize how it looks out for them, finding solutions to meet their needs and keep them satisfied. Reassure prospective clients and customers that they won't regret choosing the business's services or products.
                    </p>
                </div>
            </div>
        </main>
    </div>
    );
}

export default MissionHistory;
