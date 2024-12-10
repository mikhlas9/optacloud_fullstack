import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = ({ initialPosition, onPositionChange }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [position, setPosition] = useState(initialPosition);

  const handleDragEnd = (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setPosition(newPosition);
    onPositionChange(newPosition);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={14}
      onClick={(e) => {
        const newPosition = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };
        setPosition(newPosition); 
        onPositionChange(newPosition); 
      }}
    >
      <Marker position={position} draggable onDragEnd={handleDragEnd} />
    </GoogleMap>
     <div className="mt-2 text-sm text-gray-600">
     Latitude: {position.lat.toFixed(6)}, Longitude: {position.lng.toFixed(6)}
   </div>
 
 </>
  );
};

export default MapComponent;