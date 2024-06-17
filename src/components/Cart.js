import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import CartList from "./CartList";

const Cart=()=>{
   
    const cartItem=useSelector((store)=> store.cart.items);
    
    const dispatch=useDispatch()
    const handleClearCart=()=>{
         dispatch(removeItem())
    }

    const totalsum=cartItem.map((item)=>(item.card.info.price|| item.card.info.defaultPrice))
    
    let sum = 0;
 
// Running the for loop
for (let i = 0; i < totalsum.length; i++) {
    sum += totalsum[i];
}

    return<div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl w-auto">
         
         <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Cart</h2>

      <div className="w-6/12 m-auto ">
      <div>
        
     <div>
      <CartList items={cartItem}/>

      </div>      

      <div >
         <p className="text-2xl font-bold text-right mx-16 text-gray-800">Subtotal: Rs.{sum/100}</p>
     </div>
     </div>

     
          
     </div>
     </div>
};

export default Cart;