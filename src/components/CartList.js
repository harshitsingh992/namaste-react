import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItems, removeItem } from '../utils/cartSlice';
function CartList({items}) {
    
   
  const dispatch=useDispatch()
    const handleClearCart=(Item)=>{
         dispatch(removeItem(Item))
    }
  return (
      <div>
        {
        items.map((item)=>(
        

              <div  key={item.card.info.id} className="flex justify-between  border-b border-gray-300 py-4   hover:bg-gray-100">
                
                <div className="flex items-center">
                    <img  src={CDN_URL+ item.card.info.imageId} alt={item.card.info.name} className="w-28 h-28 object-cover rounded mr-4"/>
                    <div>
                        <span >{item.card.info.name}</span>
                       <span className="block text-gray-600">₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    </div>
                </div>

                <div className="flex items-center">
                       
                        <button className="ml-4 text-red-500 hover:text-red-700 focus:outline-none" onClick={()=>{
                            handleClearCart(item)
                        }}>Remove</button>
                </div>
                    
            </div>

        ))}
    </div>
  )
}

export default CartList