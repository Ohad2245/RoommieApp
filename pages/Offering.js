import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "400px"
};

const center = {
  lat: 44,
  lng: -80
};

function Offering() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      error => {
        console.log(error);
      }
    );
  }, []);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCkxxy1RdAq21NHwKn8gWN8TApRF6aRXl0"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      { currentPosition && (
          <Marker
            position={currentPosition}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Offering;