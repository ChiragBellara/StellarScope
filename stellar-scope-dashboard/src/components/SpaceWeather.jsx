import { useState, useEffect } from "react";
import axios from "axios";

function SpaceWeather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.API_URL;
    axios
      .get(API_URL + "api/space-weather")
      .then((response) => setWeather(response.data))
      .catch((error) =>
        console.error("Error fetching space weather data:", error)
      );
  }, []);

  return (
    <div>
      <h2>Space Weather Reports</h2>
      <ul>
        {weather.map((event) => (
          <li key={event.region_number}>
            <strong>{event.region_number}</strong> - {event.lat_hg}° Latitude
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpaceWeather;
