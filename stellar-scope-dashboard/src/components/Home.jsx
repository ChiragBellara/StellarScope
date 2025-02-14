import { Link } from "react-router-dom";
import {
  FaCameraRetro,
  FaMars,
  FaMeteor,
  FaSun,
  FaSatellite,
} from "react-icons/fa";

function Home() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">🌌 Welcome to StellarScope</h1>
      <p className="text-lg mb-8">
        Explore space data with real-time information about asteroids, Mars,
        space weather, and satellites.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/picture"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 flex items-center"
        >
          <FaCameraRetro className="text-4xl mr-4" />
          <span className="text-lg">Astronomy Picture of the Day</span>
        </Link>

        <Link
          to="/mars-photos"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 flex items-center"
        >
          <FaMars className="text-4xl mr-4" />
          <span className="text-lg">Mars Rover Photos</span>
        </Link>

        <Link
          to="/asteroids"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 flex items-center"
        >
          <FaMeteor className="text-4xl mr-4" />
          <span className="text-lg">Asteroid Tracker</span>
        </Link>

        <Link
          to="/space-weather"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 flex items-center"
        >
          <FaSun className="text-4xl mr-4" />
          <span className="text-lg">Space Weather Reports</span>
        </Link>

        <Link
          to="/satellites"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 flex items-center"
        >
          <FaSatellite className="text-4xl mr-4" />
          <span className="text-lg">Live Satellite Tracker</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
