import { createContext, useState, useEffect } from 'react';

const HotelContext = createContext();

const HotelProvider = ({ children }) => {
    const [hotelData, setHotelData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/hotels/')
            .then(response => response.json())
            .then(data => {
                setHotelData(data[0]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <HotelContext.Provider value={{ hotelData, loading }}>
            {children}
        </HotelContext.Provider>
    );
};

export { HotelProvider, HotelContext };
