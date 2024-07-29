
import { useContext } from 'react';
import userImage from '../../assets/images/user.png';
import ShimmerLoader from '../ShimmerLoader/ShimmerLoader';
import { HotelContext } from '../../context/HotelContext';

const HostProfile = () => {
    const { hotelData, loading } = useContext(HotelContext);
    console.log(hotelData);

    if (loading) {
        return <ShimmerLoader />;
    }

    if (!hotelData) {
        return <div>No data available</div>;
    }

    const { host_information } = hotelData;

    return (
        <div>
            <section className="profile-section">
                <h1>Meet your Host</h1>
                <div className="profile">
                    <div className="profile-card">
                        <div className="profile-info">
                            <div className="left">
                                <img src={userImage} alt="Fernando" className="profile-image" />
                                <h2 className="profile-name">{host_information}</h2>
                                <p className="superhost">Superhost</p>
                            </div>
                            <div className="right">
                                <div className="stat">
                                    <div className="stat-value">310</div>
                                    <div className="stat-label1">Reviews</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-value">4.92 ★</div>
                                    <div className="stat-label1">Rating</div>
                                </div>
                                <div className="stat2">
                                    <div className="stat-value">7</div>
                                    <div className="stat-label3">Years hosting</div>
                                </div>
                            </div>
                        </div>
                        <div className="bio">
                            <p>
                                <img src={userImage} alt="Born icon" className="icon" />
                                Born in the 80s
                            </p>
                            <p>
                                <img src={userImage} alt="Work icon" className="icon" />
                                My work: Hospitality
                            </p>
                            <p>
                                Hello world! I love traveling and I also love welcoming guests
                                in my home country, Perú, meeting new...
                            </p>
                            <span className="show-more">Show more {'>'}</span>
                        </div>
                    </div>
                    <div className="profile-details">
                        <div className="superhost-info">
                            <h2>Fernando is a Superhost</h2>
                            <p>
                                Superhosts are experienced, highly rated hosts who are committed
                                to providing great stays for guests.
                            </p>
                        </div>
                        <div className="co-hosts">
                            <h3>Co-hosts</h3>
                            <div className="co-host-list">
                                <div className="co-host">
                                    <img src={userImage} alt="Percy" />
                                    Percy
                                </div>
                                <div className="co-host">
                                    <img src={userImage} alt="Raul" />
                                    Raul
                                </div>
                            </div>
                        </div>
                        <div className="host-details">
                            <h3>Host details</h3>
                            <p>Response rate: 100%</p>
                            <p>Responds within an hour</p>
                        </div>
                        <button className="message-host">Message Host</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HostProfile;