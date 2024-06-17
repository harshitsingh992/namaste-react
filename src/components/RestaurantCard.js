import React from "react"
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{

    const {resData}=props;
    
      const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
      return(

    <div className="res-card m-4 p-4 w-[250px] rounded-xl hover:bg-orange-300 bg-gray-100 " >
    <img  
    className="res-logo rounded-lg h-60" 
    src={CDN_URL+cloudinaryImageId}
    />
    <h3 className="font-bold py-4 text-lg ">{name}</h3>
    <h4 className="font-semibold">⭐{avgRating} 🛵{resData?.info?.sla?.deliveryTime} min</h4> 
    <h4 className="font-light">{cuisines.join(', ')}</h4>
    <h4>{costForTwo}</h4>
    </div>


      )
    }


//Higher order component

export const withPromotedLabel=(RestaurantCard)=>{


return(props)=>{
return(
<div>
<label className="absolute bg-black text-white rounded-lg">
Open. . .
</label>
<RestaurantCard {...props}/>
</div>
)
}
}

    export default RestaurantCard;