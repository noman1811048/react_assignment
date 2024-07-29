import { useState, useEffect, useContext } from 'react';
import './HotelRooms.css';
import { HotelContext } from '../../context/HotelContext';
import config from '../../config';
import ShimmerLoader from '../ShimmerLoader/ShimmerLoader';

const HotelRooms = () => {
    const { hotelData, loading } = useContext(HotelContext);
    const [rooms, setRooms] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchRooms = async () => {
            if (hotelData) {
                try {
                    const response = await fetch(`http://localhost:8080/api/rooms/${hotelData.slug}`);
                    const data = await response.json();
                    setRooms(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchRooms();

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, [hotelData]);

    if (loading) {
        return <ShimmerLoader />;
    }

    // Collect only the first 6 images from the room images
    const images = rooms.flatMap(room => room.room_image).slice(0, 6);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="hotel-rooms">
            {isMobile ? (
                <div className="mobile-slider">
                    <button className="slider-button prev" onClick={prevSlide}>&#10094;</button>
                    <button className="slider-button next" onClick={nextSlide}>&#10095;</button>
                    <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <div className="bedroom-card" key={index}>
                                <img src={`${config.apiBaseURL}${image}`} alt={`Bedroom ${index + 1}`} />
                            </div>
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
                images.map((image, index) => (
                    <div className="bedroom-card" key={index}>
                        <img src={`${config.apiBaseURL}${image}`} alt={`Bedroom ${index + 1}`} />
                    </div>
                ))
            )}
        </div>
    );
};

export default HotelRooms;