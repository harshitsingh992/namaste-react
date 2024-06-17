import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice';
function ItemList({items}) {
    
   const dispatch=useDispatch();
  
   const handleAddItem=(item)=>{
     dispatch(addItems(item)); }
     
  return (
      <div>
      
        {
        items.map((item)=>(
        
        <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
             
              <div className=' w-9/12'>
              
              <div className='py-2 '>

              <span className=''> {item.card.info.name} </span>
              <span className=''>{" ₹ "}{item.card.info.price/100||item.card.info.defaultPrice/100} </span>
              
              </div>
              <p className="text-xs">{item.card.info.description}</p>

              </div>

              <div className=" w-3/12 p-4 " >
              <div className=' absolute'>
              <button
               className='p-2  mx-16 rounded-lg  bg-black text-white shadow-lg hover:bg-orange-400 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200 ' 
               onClick={()=>handleAddItem(item) }
              >add+</button>
              </div>
              <img src={CDN_URL+ item.card.info.imageId}></img>
              </div>

              </div>
           
       
        ))}
    
    </div>
  )
}

export default ItemList