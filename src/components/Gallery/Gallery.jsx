
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/imag5.jpg';

const Gallery = () => {
    return (
        <div className="image-grid">
            <img src={image1} alt="Bedroom" className="main-image" />
            <img src={image2} alt="Living room" />
            <img src={image3} alt="Door lock" />
            <img src={image4} alt="Dining area" />
            <div className="image-container">
                <img src={image5} alt="Kitchen" />
                <div className="show-all">
                    <div className="icon"></div>
                    Show all photos
                </div>
            </div>
        </div>
    );
};

export default Gallery;
