
import userImage from '../../assets/images/user.png';
import { HotelContext } from '../../context/HotelContext';
import { useContext } from 'react';
import ShimmerLoader from '../ShimmerLoader/ShimmerLoader';
import HotelRooms from '../HotelRooms/HotelRooms';

const ListingOverview = () => {
    const { hotelData, loading } = useContext(HotelContext);

    if (loading) {
        return <ShimmerLoader />;
    }
    const { bathroom_count, bedroom_count, host_information, guest_count } = hotelData;
    return (
        <div>
            <section className="test-container">
                <div className="first">
                    <div className="listing-info">
                        <h1 className="listing-info-title">Comfy New Apt. in Pueblo Libre!</h1>
                        <h1 className="subheading">Entire rental unit in Lima, Peru</h1>
                        <p className="details">{guest_count} guests · {bedroom_count} bedroom · 1 bed · {bathroom_count} bath</p>
                        <p className="details">★ New</p>
                        <div className="divider"></div>
                        <div className="host-info">
                            <img src={userImage} alt="Host Fernando" />
                            <div>
                                <p><strong>{host_information}</strong></p>
                                <p className="details">Superhost · 7 years hosting</p>
                            </div>
                        </div>
                    </div>

                    <div className="amenity-section">
                        <div className="divider"></div>

                        <div className="amenity">
                            <div className="amenity-icon"><i className="fas fa-key"></i></div>
                            <div>
                                <p><strong>Self check-in</strong></p>
                                <p className="details">Check yourself in with the smartlock.</p>
                            </div>
                        </div>

                        <div className="amenity">
                            <div className="amenity-icon"><i className="fas fa-star"></i></div>
                            <div>
                                <p><strong>Fernando is a Superhost</strong></p>
                                <p className="details">
                                    Superhosts are experienced, highly rated Hosts.
                                </p>
                            </div>
                        </div>

                        <div className="divider"></div>
                    </div>
                    <div className="translated-info">
                        <p>
                            Some info has been automatically translated.
                            <a href="#" className="show-more">Show original</a>
                        </p>
                    </div>

                    <div className="description">
                        <p>
                            Welcome to our brand-new 1 bedroom apartment, in a quiet and
                            central location next to a park!
                        </p>
                        <p>
                            It&apos;s conveniently located in Pueblo Libre, just 25min. away from
                            the airport. Steps away from Clínica Stella Maris, Universidad
                            Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa,
                            YMCA Peru and Alas Peruanas University. It&apos;s also very close to La
                            ...
                        </p>
                        <a href="#" className="show-more">Show more {">"}</a>
                    </div>
                    <div className="divider"></div>

                    <section className="where-youll-sleep">
                        <h2>Where you&apos;ll sleep</h2>
                        <HotelRooms />
                    </section>

                    <div className="divider"></div>

                    <section className="place-offers">
                        <h2>What this place offers</h2>
                        <div className="amenities-grid">
                            <div className="amenity-item">
                                <i className="fas fa-utensils amenity-icon"></i>
                                Kitchen
                            </div>
                            <div className="amenity-item">
                                <i className="fas fa-utensils amenity-icon"></i>
                                Kitchen
                            </div>
                            <div className="amenity-item">
                                <i className="fas fa-wifi amenity-icon"></i>
                                Wifi
                            </div>
                            <div className="amenity-item">
                                <i className="fas fa-tv amenity-icon"></i>
                                TV
                            </div>
                            <div className="amenity-item">
                                <i className="fas fa-building amenity-icon"></i>
                                Elevator
                            </div>
                            <div className="amenity-item">
                                <i className="fas fa-biohazard amenity-icon"></i>
                                Carbon monoxide alarm
                            </div>
                        </div>
                        <div className="show-all-amenities">
                            <button className="show-all-button">Show all 32 amenities</button>
                        </div>
                    </section>

                    <div className="divider"></div>

                    <div>
                        <h2>Select check-in date</h2>
                        <p className="subtitle">Add your travel dates for exact pricing</p>

                        <div className="months-container">
                            <div className="month-july">
                                <div className="month-header">
                                    <span className="month-name">July 2024</span>
                                </div>
                                <table className="calendar">
                                    <thead>
                                        <tr>
                                            <th>Su</th>
                                            <th>Mo</th>
                                            <th>Tu</th>
                                            <th>We</th>
                                            <th>Th</th>
                                            <th>Fr</th>
                                            <th>Sa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><button disabled className="disabled">30</button></td>
                                            <td><button>1</button></td>
                                            <td><button>2</button></td>
                                            <td><button>3</button></td>
                                            <td><button>4</button></td>
                                            <td><button>5</button></td>
                                            <td><button>6</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>7</button></td>
                                            <td><button>8</button></td>
                                            <td><button>9</button></td>
                                            <td><button>10</button></td>
                                            <td><button>11</button></td>
                                            <td><button>12</button></td>
                                            <td><button>13</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>14</button></td>
                                            <td><button>15</button></td>
                                            <td><button>16</button></td>
                                            <td><button>17</button></td>
                                            <td><button>18</button></td>
                                            <td><button>19</button></td>
                                            <td><button className="selected">20</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>21</button></td>
                                            <td><button>22</button></td>
                                            <td><button>23</button></td>
                                            <td><button>24</button></td>
                                            <td><button>25</button></td>
                                            <td><button>26</button></td>
                                            <td><button>27</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>28</button></td>
                                            <td><button>29</button></td>
                                            <td><button>30</button></td>
                                            <td><button>31</button></td>
                                            <td><button disabled className="disabled">1</button></td>
                                            <td><button disabled className="disabled">2</button></td>
                                            <td><button disabled className="disabled">3</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="month-aug">
                                <div className="month-header">
                                    <span className="month-name">August 2024</span>
                                    <span className="next-month">›</span>
                                </div>
                                <table className="calendar">
                                    <thead>
                                        <tr>
                                            <th>Su</th>
                                            <th>Mo</th>
                                            <th>Tu</th>
                                            <th>We</th>
                                            <th>Th</th>
                                            <th>Fr</th>
                                            <th>Sa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><button disabled className="disabled">28</button></td>
                                            <td><button disabled className="disabled">29</button></td>
                                            <td><button disabled className="disabled">30</button></td>
                                            <td><button disabled className="disabled">31</button></td>
                                            <td><button>1</button></td>
                                            <td><button>2</button></td>
                                            <td><button>3</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>4</button></td>
                                            <td><button>5</button></td>
                                            <td><button>6</button></td>
                                            <td><button>7</button></td>
                                            <td><button>8</button></td>
                                            <td><button>9</button></td>
                                            <td><button>10</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>11</button></td>
                                            <td><button>12</button></td>
                                            <td><button>13</button></td>
                                            <td><button>14</button></td>
                                            <td><button>15</button></td>
                                            <td><button>16</button></td>
                                            <td><button>17</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>18</button></td>
                                            <td><button>19</button></td>
                                            <td><button>20</button></td>
                                            <td><button>21</button></td>
                                            <td><button>22</button></td>
                                            <td><button>23</button></td>
                                            <td><button>24</button></td>
                                        </tr>
                                        <tr>
                                            <td><button>25</button></td>
                                            <td><button>26</button></td>
                                            <td><button>27</button></td>
                                            <td><button>28</button></td>
                                            <td><button>29</button></td>
                                            <td><button>30</button></td>
                                            <td><button>31</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="footer">
                            <span className="keyboard-icon">⌨</span>
                            <button className="clear-dates">Clear dates</button>
                        </div>
                    </div>

                </div>
                <div className="second">

                </div>
                <div className="third">
                    <h2>Add dates for prices</h2>
                    <div className="date-inputs">
                        <div className="date-input">
                            <div className="date-label">CHECK-IN</div>
                            <div className="date-placeholder">Add date</div>
                        </div>
                        <div className="date-input">
                            <div className="date-label">CHECKOUT</div>
                            <div className="date-placeholder">Add date</div>
                        </div>
                    </div>
                    <div className="guests-input">
                        <div className="guests-label">GUESTS</div>
                        <div className="guests-placeholder">1 guest</div>
                        <span className="guests-arrow"></span>
                    </div>
                    <button className="check-availability-btn">Check availability</button>
                    <div className="report-link">
                        <a href="#">Report this listing</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListingOverview;