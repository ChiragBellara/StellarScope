import { useState, useEffect } from "react";
import axios from "axios";

function AsteroidTracker() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.API_URL;
    axios
      .get(API_URL + "api/asteroids")
      .then((response) => setAsteroids(response.data))
      .catch((error) => console.error("Error fetching asteroid data:", error));
  }, []);

  return (
    <div>
      <h2>Near-Earth Objects</h2>
      <ul>
        {Object.values(asteroids)
          .flat()
          .map((asteroid) => (
            <li key={asteroid.id}>
              <strong>{asteroid.name}</strong> -{" "}
              {asteroid.close_approach_data[0].close_approach_date}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AsteroidTracker;
