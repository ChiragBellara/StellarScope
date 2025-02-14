import { useState, useEffect } from "react";
import axios from "axios";

function Picture() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4137/api/apod1")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching APOD:", error));
  }, []);

  return data ? (
    <div>
      <h1>{data.title}</h1>
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Picture;
