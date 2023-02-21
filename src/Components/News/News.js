import { useState } from "react";
import axios from "axios";

function News() {
  const [data, setData] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );

      setData(response.data.drinks);
    } catch (error) {
      console.error(error);
    }
  }

  getUser();

  return (
    <div className="flex pb-5">
      {" "}
      {data.map((item) => (
        <div className="card bg-dark text-white m-2" key={item.idDrink}>
          <img
            className="card-img"
            src={item.strDrinkThumb}
            alt={item.strDrink}
            height="200"
            width="200"
            style={{ opacity: "0.5" }}
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-end">
            <h5 className="card-title">{item.strDrink}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
