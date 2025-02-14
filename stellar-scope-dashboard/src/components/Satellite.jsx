import { useState, useEffect } from "react";
import axios from "axios";

function SatelliteTracker() {
  const [satellite, setSatellite] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.API_URL;
    axios
      .get(API_URL + "api/satellite")
      .then((response) => setSatellite(response.data))
      .catch((error) => console.error("Error fetching satellite data:", error));
  }, []);

  return satellite ? (
    <div>
      <h2>Live Satellite Tracking</h2>
      <p>Latitude: {satellite.latitude}</p>
      <p>Longitude: {satellite.longitude}</p>
      <p>Altitude: {satellite.altitude} km</p>
    </div>
  ) : (
    <p>Loading satellite data...</p>
  );
}

export default SatelliteTracker;
