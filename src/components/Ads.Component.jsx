import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const AdsComponent = () => {
    const images = ["/B2.jpg", "/B3.jpg"];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500, // thời gian chuyển
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // hiệu ứng mờ dần
        arrows: false,
        cssEase: "ease-in-out", // giúp chuyển cảnh mượt hơn
    };

    return (
        <div className="w-full">
        <Slider {...settings}>
            {images.map((src, index) => (
            <div key={index}>
                <img
                src={src}
                alt={`Ad ${index + 1}`}
                className="w-full h-[400px] object-cover"
                />
            </div>
            ))}
        </Slider>
        </div>
    );
};

export default AdsComponent;
