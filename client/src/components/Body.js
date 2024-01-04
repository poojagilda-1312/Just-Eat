import React, { useEffect } from "react";
import ReactDom from "react-dom/client";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const latitude = 22.7195687;
    const longitude = 75.8577258;
    //  const apiUrl = `https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&collection=83637`;
    const apiUrl =
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.7195687%26lng%3D75.8577258";

    const data = await fetch(apiUrl);
    const json = await data.json();

    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (ListOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body ">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = ListOfRestaurant.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search{" "}
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-50 rounded-lg "
            onClick={() => {
              const filteredList = ListOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
