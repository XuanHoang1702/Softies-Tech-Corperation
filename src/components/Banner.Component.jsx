import '../styles/css/Banner.css';
import banner from "../styles/images/R.jpg";

const BannerComponent = () => {
    return (
        <div className="banner-container">
            <img src={banner} alt="Home Banner" className="home-banner" />
            <div className="banner-text">
                <div className="banner-title">Neque porro quisquam est qui dolorem</div>
                <div className="banner-description">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
        </div>
    );
}

export default BannerComponent;
