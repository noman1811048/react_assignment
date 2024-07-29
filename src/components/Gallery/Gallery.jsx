import { useContext, useState, useEffect } from 'react';
import ShimmerLoader from '../ShimmerLoader/ShimmerLoader';
import { HotelContext } from '../../context/HotelContext';
import config from '../../config';
import './Gallery.css';
import { Share2 } from 'lucide-react';

const Gallery = () => {
    
    const { hotelData, loading } = useContext(HotelContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (loading) {
        return <ShimmerLoader />;
    }

    if (!hotelData) {
        return <div>No data available</div>;
    }

    const { images, title } = hotelData;
    const baseUrl = config.apiBaseURL;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="gallery">
            <div className="header">
                <h1 className="title">{title}</h1>
                <div className="actions">
                    <button id="shareButton">
                        <span className="share-icon">↗️</span> <span className="text">Share</span>
                    </button>
                    <button id="heartButton" className="heart-button">
                        <span className="heart-icon">♡</span> <span className="text">Save</span>
                    </button>
                </div>
            </div>
            {isMobile ? (
                <div className="mobile-slider">
                    <div className="mobile-slider-header">
                        <h2 className="mobile-title">{title}</h2>
                        <button className="mobile-share-button">
                            <Share2 size={24} />
                        </button>
                    </div>
                    <button className="slider-button prev" onClick={prevSlide}>&#10094;</button>
                    <button className="slider-button next" onClick={nextSlide}>&#10095;</button>
                    <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={`${baseUrl}${image}`}
                                alt={`Slide ${index + 1}`}
                                className="slide"
                            />
                        ))}
                    </div>
                    <div className="slider-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="image-grid">
                    <img src={`${baseUrl}${images[4]}`} alt="Main image" className="main-image" />
                    <img src={`${baseUrl}${images[3]}`} alt="Secondary image 1" />
                    <img src={`${baseUrl}${images[2]}`} alt="Secondary image 2" />
                    <img src={`${baseUrl}${images[1]}`} alt="Secondary image 3" />
                    <div className="image-container">
                        <img src={`${baseUrl}${images[0]}`} alt="Secondary image 4" />
                        <button className="show-all">
                            <svg className="grid-icon" viewBox="0 0 24 24" width="18" height="18">
                                <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                            </svg>
                            Show all photos
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;