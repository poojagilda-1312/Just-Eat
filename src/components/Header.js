import React, { useState } from "react";
import ReactDom from "react-dom/client" 
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
const Header = () => {
  const [btnName , setBtnName]  = useState("Login");
    return (
  <div className="flex justify-between bg-pink-100 shadow-lg">
  <div className="Logo-container">
  <img  className="w-40" src = {LOGO_URL}></img>
  </div>
  <div className="flex items-center">
    <ul className="flex p-4 m-4 ">
        <li className="px-4"> <Link className="links" to= "/">Home </Link> </li>
        <li className="px-4">
        <Link className="links" to= "/about">About Us </Link> </li>
        <li className="px-4">
        <Link className="links" to ="/contact">Contact Us</Link> </li>
        <li className="px-4">Cart</li>
        <button className="login" onClick={() => {
        btnName === "Login"
         ? setBtnName("Logout") 
         : setBtnName("Login") ;
        }} > {btnName} </button>
    </ul>
  </div>
  </div>
    )
  }
  export default Header;