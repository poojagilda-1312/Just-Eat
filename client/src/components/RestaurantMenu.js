// Import necessary modules from the 'react' library.
import React, { createFactory } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import custom hook 'useRestaurantMenu' from the specified location.
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

// Define the 'RestaurantMenu' functional component.
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState();
  // Extract the 'resID' parameter from the URL using 'useParams' hook.
  const { resID } = useParams();

  // Log the extracted 'resID' for debugging puirposes.
  // console.log(resID + " params from url");

  // Call the 'useRestaurantMenu' hook with 'resID' to fetch restaurant information.
  const resInfo = useRestaurantMenu(resID);
  if (resInfo === null) {
    return <p>Loading...</p>;
  }

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} -{costForTwoMessage}
      </p>

      {/* //  categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategories
          key={index}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
