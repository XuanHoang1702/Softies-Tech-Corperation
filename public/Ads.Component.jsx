import { useEffect, useState } from "react";

const AdsComponent = () => {
    const images = [
        "../styles/images/B1.jpg",
        "../styles/images/B2.jpg",
        "../styles/images/B3.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // đổi ảnh mỗi 3 giây

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full overflow-hidden">
        <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {images.map((src, index) => (
            <img
                key={index}
                src={require(`${src}`)}
                alt={`Ad ${index + 1}`}
                className="w-full flex-shrink-0"
            />
            ))}
        </div>
        </div>
    );
};

export default AdsComponent;
