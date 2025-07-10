import AdsComponent from "../components/Ads.Component";
import BannerComponent from "../components/Banner.Component";
import CapabilitiesComponent from "../components/Capabilities.Component";
import ContactUsComponent from "../components/ContactUs.Component";
import FeaturedProjects from "../components/FeaturedProjects.Component";
import MissionSection from "../components/MissionSection.Compoent";
import PressSection from "../components/PressSection.Component";
import ResearchTechnologySection from "../components/ResearchTechnologySection.Component";

const HomePage = () => {
    return (
        <div>
            <BannerComponent />
            <MissionSection />
            <ResearchTechnologySection/>
            <FeaturedProjects/>
            <CapabilitiesComponent />
            <AdsComponent />
            <PressSection />
            <ContactUsComponent />
        </div>
    );
};

export default HomePage;
