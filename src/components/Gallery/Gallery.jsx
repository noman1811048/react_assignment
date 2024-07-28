import { useContext } from 'react';
import ShimmerLoader from '../ShimmerLoader/ShimmerLoader';
import { HotelContext } from '../../context/HotelContext';


const Gallery = () => {
    const { hotelData, loading } = useContext(HotelContext);
    

    if (loading) {
        return <ShimmerLoader />;
    }

    if (!hotelData) {
        return <div>No data available</div>;
    }

    const { images, title } = hotelData;
    const baseUrl = 'http://localhost:8080'; // Ensure this matches your backend server address

    return (
        <div>
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
            <div className="image-grid">
                <img src={`${baseUrl}${images[4]}`} alt="Main image" className="main-image" />
                <img src={`${baseUrl}${images[3]}`} alt="Secondary image 1" />
                <img src={`${baseUrl}${images[2]}`} alt="Secondary image 2" />
                <img src={`${baseUrl}${images[1]}`} alt="Secondary image 3" />
                <div className="image-container">
                    <img src={`${baseUrl}${images[0]}`} alt="Secondary image 4" />
                    <div className="show-all">
                        <div className="icon"></div>
                        Show all photos
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
