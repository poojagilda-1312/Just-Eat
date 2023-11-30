import React, { useEffect } from "react";
import ReactDom from "react-dom/client" 
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";
import {Link} from "react-router-dom";

const Body = () => {  
    const [ListOfRestaurant,setListOfRestaurant] = useState([]);
    // const [ListOfHotel,setListOfHotel] = useState([]);
    const [searchText , setSearchText] = useState([])
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    // const [filteredRestaurant,setFilteredRestaurant] = useState([])
    //whenever state variable update, react triggers a reconciliation  cycle (re-renders the component)
    useEffect(() => {
        // console.log("useEffect is called ")   
        fetchData();
    }, [])
    const  fetchData =  async () => {
        
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&collection=83637")
      const json =  await  data.json();
        console.log(json, "this is the perent object ")
      //  console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants, " adding this into setter ")
      setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        // console.log(ListOfHotel,"lost of hotel just after setter")

    };
    return (
    <div className="body ">
      <div className="filter flex">  
       <div className="search m-4 p-4 " >
        <input type= "text" className="border border-solid border-black" value ={searchText} onChange  = {(e) => {
               setSearchText(e.target.value)
 
        }}/>
        <button  className="px-3 py-1 bg-green-100 m-4 rounded-lg" onClick={() =>{
           console.log("api calllll")
            const filteredRestaurant = ListOfRestaurant.filter((doremon) =>
             
              // console.log(doremon.info.name.toLowerCase(),"||||",searchText.toLowerCase()," SO THE ANS IS ",doremon.info.name.toLowerCase().includes(searchText.toLowerCase()))
             doremon.info.name.toLowerCase().includes(searchText.toLowerCase())
             
              )
            //  console.log(filteredRestaurant)
            setFilteredRestaurant(filteredRestaurant);      
        }} >Search  </button>
       </div>
       <div className=" m-4 p-4 flex items-center">
       <button className="px-4 py-2 bg-gray-50 rounded-lg " onClick ={ () => {
                    //  console.log(res.info ,"hres data ")
                    const filteredList  =  ListOfRestaurant.filter((res) => res.info.avgRating  >  4)
                    // console.log(filteredList, "helloooo")
                    setFilteredRestaurant(filteredList)
               
            }}>
            Top Rated Restaurant </button> 
       </div>
      
            </div>
            
            <div className="flex flex-wrap">
        
            { 
                  filteredRestaurant.map ((restaurant) => {
                  {/* console.log(restaurant) */}
                  return  <Link  key ={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}>
                   <RestaurantCard  resData={restaurant.info}/>  </Link>
                    })
                }
                {/* <RestaurantCard resData = {resList[0]} /> */}
                {/* <RestaurantCard resName= "Dominos" cuisine = "pizza"/> */}
             
            </div>
    
    </div>
  
    )
  }
  export default Body;

