import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
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

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCkxxy1RdAq21NHwKn8gWN8TApRF6aRXl0",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={10}
      
    >
      <Marker position={currentPosition} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Offering);
