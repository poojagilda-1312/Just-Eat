import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (resData) => {

    // /wait/now here we are not destru the res data see ok 
    // so we are passing OBJECT from there and also we are not destr it here so it is like object inside object {{}}
// yes yesss i commented so i have to do two times res data
// and i m also calling resdata... jo object waha se aa rha same nam look above
    //wait a sec 
   //   console.log(props)  it is an javascript object 
   const {name ,cloudinaryImageId,avgRatingString, cuisines,costForTwo,sla} = resData.resData

    return (
       

        <div className="res-card">
         <img  className="res-logo"
          src ={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.resData.cloudinaryImageId}`} />
           <h3> {name} </h3>
           <h4>{cuisines.join(" , ")} </h4>
           <h4>{avgRatingString} </h4>
           
           <h4> {sla.deliveryTime}</h4>    
           <h4>{costForTwo}</h4>    
          {/* { console.log(resData.resData.name )} */}
           
        </div>  
    )
  }
  export default RestaurantCard;