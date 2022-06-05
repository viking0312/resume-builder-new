import axios from "axios";
import { useEffect, useState } from "react";

const Http = () => {
  useEffect(() => {
    axios
      .get(
        "https://sample-data-api-5195d-default-rtdb.firebaseio.com/Veggies.json"
      )
      .then((response) => {
        console.log("responseeeeee" + JSON.stringify(response));
        setVeg(response.data);
      })
      .catch((error) => {
        console.log("errorrrr " + error);
      })
      .finally(() => {
        console.log("finallyyyyyyyyyy");
      });
  });

  const [veg, setVeg] = useState("no veg for you");

  return <div>{veg}</div>;
};

export default Http;
