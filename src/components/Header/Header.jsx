

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="search-container" id="searchContainer">
                    <div className="search-section">
                        <label className="search-label" htmlFor="whereInput">Where</label>
                        <input type="text" className="search-field" placeholder="Anywhere" id="whereInput" />
                    </div>
                    <div className="search-section">
                        <label className="search-label" htmlFor="checkInInput">Check in</label>
                        <input type="text" className="search-field" placeholder="Add dates" id="checkInInput" />
                    </div>
                    <div className="search-section hidden">
                        <label className="search-label" htmlFor="checkOutInput">Check out</label>
                        <input type="text" className="search-field" placeholder="Add dates" id="checkOutInput" />
                    </div>
                    <div className="search-section">
                        <label className="search-label" htmlFor="guestsInput">Who</label>
                        <input type="text" className="search-field" placeholder="Add guests" id="guestsInput" />
                    </div>
                    <button className="search-button" id="searchButton">
                        <div className="search-icon"></div>
                        <span className="search-button-text">Search</span>
                    </button>
                </div>
                <div className="wrapper">
                    <div className="browser-icon">
                        <i className="fas fa-globe"></i>
                    </div>
                    <div className="icon-container">
                        <div className="menu-icon">
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className="user-icon">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;