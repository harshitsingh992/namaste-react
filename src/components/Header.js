import React from "react"
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import money from "./money.png";

const Header=()=>{

    const[btnNameReact,setBtnNameReact]=useState("Login")
    const onlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(userContext);

       const cartItem=useSelector((store)=>store.cart.items)

    return( 
        <div className="flex justify-between bg-gray-800 content-center h-36 m-2 p-4">
       
       <div className="flex content-center">
          <div className="w-44 h-auto ">
           <img className=" rounded-2xl"src="https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-98-580x386.jpg"/>
           </div>
           <div className="m-9 p-3 text-6xl font-bold  text-white italic"><h1>Night Bites... :{")"}</h1></div>
       </div>

            <div className="flex my-6">
                
                <ul className="flex">
                    <li className="rounded-2xl m-2 p-2 text-xl font-bold text-black bg-white"><Link to="/">Home</Link></li>
                    <li className="rounded-2xl m-2 p-2 text-xl font-bold text-black bg-white"><Link to="/About">About Us</Link></li>
                    <li className="rounded-2xl m-2 p-2 text-xl font-bold  text-black bg-white"><Link to="/Contact">Contact Us</Link></li>
                </ul>

                <div className="w-16 flex rounded-xl   text-black bg-white">  
                <Link to="/Cart"><span className="absolute mx-8 my-4 font-extrabold text-xl ">{cartItem.length}</span>
                <img src={money} className="size-11/12 mx-1 my-1"></img></Link>
                <h1>{"    "}</h1>
               </div>
                
            </div>
        </div>
    )
}

export default Header;