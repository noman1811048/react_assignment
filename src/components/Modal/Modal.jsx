

const Modal = () => {
    return (
        <div>
            <div className="fullscreen-viewer" id="fullscreenViewer">
                <div className="fullscreen-header">
                    <button className="close-button" id="closeButton">× Close</button>
                    <div className="image-counter" id="imageCounter"></div>
                    {/* Correct usage of inline style in JSX */}
                    <div style={{ width: '70px' }}></div>
                </div>
                <div className="fullscreen-image-container">
                    <img src="" alt="Full-screen image" className="fullscreen-image" id="fullscreenImage" />
                </div>
                <button className="nav-button prev-button" id="prevButton">‹</button>
                <button className="nav-button next-button" id="nextButton">›</button>
            </div>


            <div id="anywhereModal" className="modal">
                <div className="modal-content">
                    <h2>Search by region</h2>
                    <div className="region-grid">
                        <div className="region-item">
                            <img src="./Image/flexible.png" alt="I'm flexible" />
                            <div className="region-name">I&apos;m flexible</div>
                        </div>
                        <div className="region-item">
                            <img src="./Image/southAsia.jpeg" alt="Southeast Asia" />
                            <div className="region-name">Southeast Asia</div>
                        </div>
                        <div className="region-item">
                            <img src="./Image/canada.png" alt="Canada" />
                            <div className="region-name">Canada</div>
                        </div>
                        <div className="region-item">
                            <img src="./Image/thiland.jpeg" alt="France" />
                            <div className="region-name">France</div>
                        </div>
                        <div className="region-item">
                            <img src="./Image/middleEast.jpeg" alt="Thailand" />
                            <div className="region-name">Thailand</div>
                        </div>
                        <div className="region-item">
                            <img src="./Image/europe.jpeg" alt="Middle East" />
                            <div className="region-name">Middle East</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="calendarModal" className="calendar-modal">
                <div className="calendar-header">
                    <h2 id="currentMonth">July 2024</h2>
                    <div className="calendar-nav">
                        <button id="prevMonth">&lt;</button>
                        <button id="nextMonth">&gt;</button>
                    </div>
                </div>
                <div className="calendar-grid" id="calendarGrid"></div>
                <div className="calendar-options">
                    <button id="exactDates" className="active">Exact dates</button>
                    <button id="flexibleDates">± 1 day</button>
                    <button id="flexibleDates2">± 2 days</button>
                    <button id="flexibleDates3">± 3 days</button>
                    <button id="flexibleDates7">± 7 days</button>
                </div>
            </div>

            <div id="guestsModal" className="modal">
                <div className="modal-content">
                    <h2>Guests</h2>
                    <div className="guest-category">
                        <span>Adults</span>
                        <div className="guest-controls">
                            <button className="guest-decrement" data-type="adults">-</button>
                            <span id="adultCount">0</span>
                            <button className="guest-increment" data-type="adults">+</button>
                        </div>
                    </div>
                    <div className="guest-category">
                        <span>Children</span>
                        <div className="guest-controls">
                            <button className="guest-decrement" data-type="children">-</button>
                            <span id="childrenCount">0</span>
                            <button className="guest-increment" data-type="children">+</button>
                        </div>
                    </div>
                    <div className="guest-category">
                        <span>Infants</span>
                        <div className="guest-controls">
                            <button className="guest-decrement" data-type="infants">-</button>
                            <span id="infantCount">0</span>
                            <button className="guest-increment" data-type="infants">+</button>
                        </div>
                    </div>
                    <div className="guest-category">
                        <span>Pets</span>
                        <div className="guest-controls">
                            <button className="guest-decrement" data-type="pets">-</button>
                            <span id="petsCount">0</span>
                            <button className="guest-increment" data-type="pets">+</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="shareModal" className="share-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Share this place</h2>
                        <button className="close">&times;</button>
                    </div>
                    <a href="#" className="listing-link" id="listingLink">
                        <div className="listingInfo">
                            <img src="/Image/image1.jpg" alt="Listing thumbnail" className="listing-image" />
                            <div className="listing-details">
                                Rental unit in Lima · ★New · 1 bedroom · 1 bed · 1 bath
                            </div>
                        </div>
                    </a>
                    <div className="share-options">
                        <button className="share-option" id="copyLinkButton">
                            <i className="fa-solid fa-clipboard"></i>
                            Copy Link
                        </button>
                        <button className="share-option">
                            <i className="fa-solid fa-envelope"></i>
                            Email
                        </button>
                        <button className="share-option">
                            <i className="fa-brands fa-facebook-messenger"></i>
                            Messenger
                        </button>
                        <button className="share-option">
                            <i className="fa-brands fa-facebook"></i>
                            Facebook
                        </button>
                        <button className="share-option">
                            <i className="fa-brands fa-twitter"></i>
                            Twitter
                        </button>
                        <button className="share-option">
                            <i className="fa-solid fa-code"></i>
                            Embed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;