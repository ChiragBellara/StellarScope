import { Link } from "react-router-dom";
import { FaHome, FaMars, FaMeteor, FaSun, FaSatellite } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-6">🌌 StellarScope</h1>
      <nav className="w-full">
        <ul className="space-y-4">
          <li>
            <Link
              to="/picture"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <FaHome className="mr-3" /> Picture of the Day
            </Link>
          </li>
          <li>
            <Link
              to="/mars-photos"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <FaMars className="mr-3" /> Mars Photos
            </Link>
          </li>
          <li>
            <Link
              to="/asteroids"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <FaMeteor className="mr-3" /> Asteroids
            </Link>
          </li>
          <li>
            <Link
              to="/space-weather"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <FaSun className="mr-3" /> Space Weather
            </Link>
          </li>
          <li>
            <Link
              to="/satellites"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <FaSatellite className="mr-3" /> Satellites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
