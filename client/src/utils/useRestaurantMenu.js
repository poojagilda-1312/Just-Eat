import React, { useState } from 'react'
import { useEffect } from 'react'
import { MENU_API } from "../utils/constants";
//custom hooks 
const useRestaurantMenu = (resID) => {
    const [resInfo,setResInfo] =useState(null)
//fetching data
useEffect(()=>{
fetchData()
},[]);
const fetchData= async ()=>{
    const data = await fetch(MENU_API+ resID)
    const json = await data.json();
    setResInfo(json.data)
}
//console.log(resInfo,"this is returned")
return resInfo
}
export default useRestaurantMenu;





// import { useEffect, useState } from "react";
// import { MENU_URL } from "../../utils/constant";
// const useRestaurantMenu = (res_id) => {
//     console.log("hello")
//   const [res_info, setres_info] = useState(null);

//   useEffect(() => {
//     fetchdata();
//   }, []);
//   const fetchdata = async () => {
//        console.log("fffffffffffffffffffffffffffff")
//     const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.033863&lng=72.585022&restaurantId=" + res_id);
//     const json_data = await data.json();
//     setres_info(json_data);
//     console.log(json_data,"bc")
//   };
  
// };  
// export default useRestaurantMenu;





// import { useState, useEffect } from 'react';

// const useRestaurantMenu = (res_id) => {
//   const [res_info, setres_info] = useState(null);

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const fetchdata = async () => {
//     console.log("fffffffffffffffffffffffffffff");
//     try {
//       const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.033863&lng=72.585022&restaurantId=" + res_id);
//       const json_data = await data.json();
//       setres_info(json_data);
//       console.log(json_data, "bc");
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Return the state or any other values you want to expose
//   return res_info;
// };

// export default useRestaurantMenu;
