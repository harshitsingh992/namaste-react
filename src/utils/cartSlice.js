import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({

    name:"cart",
    initialState:{
        items:[]
    },

    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter(items=> items.card.info.id != action.payload.card.info.id);
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    },

});

export const{addItems,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;