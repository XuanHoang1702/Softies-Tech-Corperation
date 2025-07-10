import CareersComponent from '../components/Careers.Component';
import InformationComponent from '../components/Information.Component';
import MissionHistory from '../components/MissionHistory.Component';
import '../styles/css/AboutPage.css';
import About from '../styles/images/About.jpg';
const AboutPage = () => {
    return (
        <div>
            <div className="imageWrapper">
                <img src={About} alt="About" />
                <span className="overlayText">ABOUT US</span>
            </div>

            <MissionHistory />
            <InformationComponent />
            <CareersComponent />
        </div>
    );
}

export default AboutPage;
