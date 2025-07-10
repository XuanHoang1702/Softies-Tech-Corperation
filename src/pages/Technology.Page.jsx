import CapabilitiComponent from "../components/Capabiliti.Component";
import FeatureComponent from "../components/Feature.Component";
import img from "../styles/images/Technology.jpg";

const TechnologyPage = () => {
    return (
        <div>
            <div className="imageWrapper">
                <img src={img} alt="Technology" />
                <span className="overlayText">TECHNOLOGY</span>
            </div>
            <CapabilitiComponent />
            <FeatureComponent />
        </div>
    );
}

export default TechnologyPage;
