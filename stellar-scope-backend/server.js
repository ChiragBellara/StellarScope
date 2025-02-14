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

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
