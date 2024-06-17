import React, { useEffect } from "react"
import ReactDOM from "react-dom/client";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Sorry from "./Sorry";
import EmptySearch from "./EmptySearch";




const Body=(props)=>{ 
    
    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const [temp ,settemp]=useState(null);
    const[searchText,setSearchText]=useState([])
    const onlineStatus=useOnlineStatus();
    const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);
    
   

   useEffect(()=>{

    fetchData();

   },[])

   const fetchData=async()=>{

    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

   const json= await data.json();
   
   const jsontemp=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   setListOfRestaurant(jsontemp)
   settemp(jsontemp)
   
   };
 
   //conditional rendering
   if(onlineStatus===false)
    {
        return<h1>Please check internet....</h1>
    }
    return temp===null?<Shimmer/>:(
    <div className="body">
       
       <div className="Upper body">

        {/* User Interface */}

       <div className="filter flex ">
        
        <img src="https://png.pngtree.com/background/20210711/original/pngtree-simple-food-top-view-banner-picture-image_1068662.jpg" className=" w-screen"/>
        <div className="absolute w-[60%] ml-80 mt-20 ">

        <div className="text-5xl font-semibold mb-12">
            <span className=" block italic">Bringing the world to your table - where every dish is a story, and every delivery is an experience.</span>
        </div>

        {/* Search Container */}
        
        <div className="search p-4 text-center mt-6">
        
        <input type="text" data-testid="searchInput" placeholder="Search any restuarant" className=" mr-3 rounded-3xl p-3 w-[70%] shadow-xl" value={searchText} onChange={(e)=>{setSearchText(e.target.value) }} />

        <button className="px-6 bg-white rounded-3xl p-3 text-black font-semibold shadow-xl" onClick={()=>{ const filterRes = listOfRestaurant.filter((res)=>{
            
            return searchText.length==0?"deafult":res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                
        })
             
            if(filterRes.length>0)
                settemp(filterRes);
            if(filterRes.length==0)
             settemp("default");
            
                
            
             console.log(filterRes)
        }} >Search</button>

        </div>

        {/* Top Rated Button conatiner */}
        
        <div className=" m-6 p-6 text-center ">
        <button className="filter-btn bg-white px-8 py-3 rounded-lg text-black font-semibold shadow-xl " onClick={()=>{
          const filterList=listOfRestaurant.filter((res)=>res.info.avgRating>4)
          settemp(filterList)
          }}>Top rated Resturants
        </button>
        </div>

        </div>
        </div>
            
            
            {/* <div className="  flex ">

            Search

            

            <div className="search m-4 p-4 ">

            <input type="text" className=" border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value) }}/>
           
            <button className="px-4 py-2 bg-gray-200 m-4 rounded-lg" onClick={()=>{ const filterRes = listOfRestaurant.filter((res)=>{
            
                return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                    
            })
            if(filterRes.length>0)
            { 
                settemp(filterRes)
            }

            }}>search</button>

            </div>


            filter
         <div className="m-4 p-4 flex items-center">

         <button className=" rounded-lg px-4 py-2  bg-gray-200" onClick={()=>{
          const filterList=listOfRestaurant.filter((res)=>res.info.avgRating>4)
          settemp(filterList)
          }} >Top Rated Restaurant</button>
          </div>

        </div> */}

        </div>



          {/* print restaurant */}

    


        <div className="res-container flex flex-wrap ">
        {
        temp=="default"?<Sorry/>:
        (temp.map((restaurant) =>(
        
            <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
           { (<RestaurantCard resData={restaurant}/>)}
            </Link>
        )))
        }
        </div>

      
    
    </div> 
    )
}

    export default Body;
    