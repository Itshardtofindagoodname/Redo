import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationMarker({ onLocationChange }) {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            onLocationChange(e.latlng);
        },
    });
}

function Map() {
    const defaultLocation = { lat: 51.505, lng: -0.09 };
    const storedLocation = JSON.parse(localStorage.getItem('userLocation'));
    const [userLocation, setUserLocation] = useState(storedLocation || defaultLocation);

    const handleLocationChange = (newLocation) => {
        setUserLocation(newLocation);
        localStorage.setItem('userLocation', JSON.stringify(newLocation));
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const newLocation = { lat: latitude, lng: longitude };
                handleLocationChange(newLocation);
            },
            (error) => {
                console.error(error);
            },
            { enableHighAccuracy: false }
        );
    }, []);

    return (
        <div className='border-2 border-black overflow-hidden flex items-center justify-center mt-20'>
            <MapContainer
                center={userLocation}
                zoom={10}
                scrollWheelZoom={false}
                className='w-screen h-96 lg:h-[500px]'
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker onLocationChange={handleLocationChange} />
            </MapContainer>
        </div>
    );
}

export default Map;
