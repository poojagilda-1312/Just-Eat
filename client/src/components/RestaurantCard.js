import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (resData) => {
    console.log(resData)
   const {name ,cloudinaryImageId,avgRatingString, cuisines,costForTwo,sla} = resData.resData
    return (
        <div className="m-4 p-4 w-52 h-96 rounded-lg bg-gray-100 hover:bg-gray-200">
         <img 
          src ={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.resData.cloudinaryImageId}`} />
           <h3 className="font-bold"> {name} </h3>
           <h4>{cuisines.join(" , ")} </h4>
           <h4>{avgRatingString} </h4>
           
           <h4> {sla.deliveryTime}</h4>    
           <h4>{costForTwo}</h4>    
          {/* { console.log(resData.resData.name )} */}     
        </div>  
    )

  }
  //high order component //functiom taing input 
 export const withPromotedLabel =(RestaurantCard)=>{
    return (props)=>{
return (
    <div>
        <label>Promoted </label>
        <RestaurantCard {...props}/>
    </div>
)
    }
  }
  export default RestaurantCard;