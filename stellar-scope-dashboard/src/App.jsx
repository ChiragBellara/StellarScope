import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Picture from "./components/AstronomyPicture";
import MarsPhotos from "./components/MarsPicture";
import AsteroidTracker from "./components/AsteroidTracker";
import SpaceWeather from "./components/SpaceWeather";
import SatelliteTracker from "./components/Satellite";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="ml-64 p-6 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/picture" element={<Picture />} />
              <Route path="/mars-photos" element={<MarsPhotos />} />
              <Route path="/asteroids" element={<AsteroidTracker />} />
              <Route path="/space-weather" element={<SpaceWeather />} />
              <Route path="/satellites" element={<SatelliteTracker />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
