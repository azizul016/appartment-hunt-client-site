import React, { useEffect, useState } from "react";
import axios from "../../axios";

function Home() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/services`)
      .then((response) => setHouses(response.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="home">
      <h1>This is Home page </h1>
    </div>
  );
}

export default Home;
