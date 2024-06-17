import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{

   const {resId} = useParams();
  
   const resinfo=useRestaurantMenu(resId);

   const [showIndex,setShowIndex]=useState(false);

  

    //dispalying the data
   

  if(resinfo===null)
    {
       return <Shimmer/>
    }
    
   const info=resinfo?.data?.cards[2]?.card?.card?.info;

   let menu=resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  

   if(menu===undefined)
    {
        menu=resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;
        
    }

    const categories=resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
      c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
   
 
 
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{info.name}</h1>
             <p className="font-bold text-lg ">{info.cuisines.join(",")}- Rs.{info.costForTwo/100 }</p>

           {/* Accordians */}

        {categories.map((c,Index)=>(
        <RestaurantCategory  
        showItems={Index===showIndex?true:false} 
        setShowInded={()=>(showIndex===Index)?setShowIndex(false):setShowIndex(Index)
        }  
        key={c?.card?.card.title} data={c?.card?.card}/>
    ))
  }

        </div>
    )
}

export default RestaurantMenu;