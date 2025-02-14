import { useState, useEffect } from "react";
import axios from "axios";

function MarsPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.API_URL;
    axios
      .get(API_URL + "api/mars-photos")
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error("Error fetching Mars photos:", error));
  }, []);

  return (
    <div>
      <h2>Mars Rover Photos</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.slice(0, 6).map((photo) => (
          <img key={photo.id} src={photo.img_src} alt="Mars" width="200px" />
        ))}
      </div>
    </div>
  );
}

export default MarsPhotos;
