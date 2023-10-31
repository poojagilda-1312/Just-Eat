import React, { useState } from "react";
import ReactDom from "react-dom/client" 
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
const Header = () => {
  const [btnName , setBtnName]  = useState("Login");
    return (
  <div className="Header">
  <div className="Logo-container">
  <img  className="Logo" src = {LOGO_URL}></img>
  </div>
  <div className="nav-items">
    <ul>
        <li> <Link className="links" to= "/">Home </Link> </li>
        <li>
        <Link className="links" to= "/about">About Us </Link> </li>
        <li>
        <Link className="links" to ="/contact">Contact Us</Link> </li>
        <li>Cart</li>
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