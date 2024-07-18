

const Map = () => {
    return (
        <div>
            <section>
                <div className="location">
                    <h2>Where you&apos;ll be</h2>
                    <p>Lima, Provincia de Lima, Peru</p>
                    <div className="map-container">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d-76.987654321!3d-12.043333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9023456789abcdef!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1618451234567!5m2!1sen!2sus"
                            width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                        </iframe>
                        <div className="map-controls">
                            <label>
                                <input type="checkbox" defaultChecked={true} />
                                Public Transit
                            </label>
                        </div>
                    </div>
                    <p className="show-more">Show more ›</p>
                </div>
            </section>
        </div>
    );
};

export default Map;
