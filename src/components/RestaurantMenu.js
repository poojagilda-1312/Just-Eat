
import React from "react";
import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);
    const {resID} = useParams()
    console.log(resID+" params from url")
    useEffect(()=>{
       fetchMenu();
            },[]);
    const fetchMenu  = async() =>{
        const data = await fetch(MENU_API+ resID)
        const json = await data.json();
     console.log(json)
        setResInfo(json.data);
     }
    //   const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    return (
        <div>
        <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> 
          <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")} </h3>

         <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
    )
}
export default RestaurantMenu; 