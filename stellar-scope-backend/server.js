require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5500;
const NASA_API_KEY = process.env.NASA_API_KEY;

// Route to fetch Astronomy Picture of the Day (APOD)
app.get("/api/apod", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch APOD" });
  }
});

// Route to fetch latest Mars Rover Photos
app.get("/api/mars-photos", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`
    );
    res.json(response.data.photos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Mars Rover photos" });
  }
});

// Route to fetch Near-Earth Objects (Asteroids)
app.get("/api/asteroids", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-02-14&end_date=2024-02-15&api_key=${NASA_API_KEY}`
    );
    res.json(response.data.near_earth_objects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch asteroid data" });
  }
});

// Route to fetch space weather data (solar storms, geomagnetic activity)
app.get("/api/space-weather", async (req, res) => {
  try {
    const response = await axios.get(
      "https://services.swpc.noaa.gov/json/solar_regions.json"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch space weather data" });
  }
});

// Route to fetch live satellite tracking data (Example: ISS)
app.get("/api/satellite", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.wheretheiss.at/v1/satellites/25544`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch satellite data" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
