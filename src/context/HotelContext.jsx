// src/context/HotelContext.js
import { createContext, useState, useEffect } from 'react';
import config from '../config';

const HotelContext = createContext();

const HotelProvider = ({ children }) => {
    const [hotelData, setHotelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseUrl = config.apiBaseURL;

    useEffect(() => {

        const fetchHotelData = async () => {
            try {
                const response = await fetch(`${baseUrl}/hotels/`);
                const hotelData = await response.json();
                setHotelData(hotelData[0]);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHotelData();
    }, [baseUrl]);

    return (
        <HotelContext.Provider value={{ hotelData, loading }}>
            {children}
        </HotelContext.Provider>
    );
};

export { HotelProvider, HotelContext };
