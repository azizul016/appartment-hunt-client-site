import React, { useEffect, useState } from "react";
import "./HouseDetails.style.css";
import axios from "../../axios";
import { useParams } from "react-router-dom";

function HouseDetails() {
  const [house, setHouse] = useState({});
  const id = useParams().id;

  useEffect(() => {
    axios
      .get(`/api/services/${id}`)
      .then((response) => setHouse(response.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="houseDetails">
      <h1>This is House Details for {house.title}</h1>
    </div>
  );
}
export default HouseDetails;
