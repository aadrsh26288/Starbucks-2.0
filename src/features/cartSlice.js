import { createSlice } from "@reduxjs/toolkit";

const initialState =[];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add: (state,action) => {
            const exist = state.find((x)=>x.id===action.payload.id)
            if(exist) {
              exist.qty++;   
            }else{
                state.push({...action.payload,qty: 1})
            } 
        },
        remove: (state,action) => {
            return state.filter((item)=>item.id !== action.payload)
          },
        FilterCard: (state,action) => {
           const HigherToLower = state.reduce((a,b)=>{
            return a-b; 
           })
            
        }  
    }
})

export const { add , remove , FilterCard} = cartSlice.actions

export default cartSlice.reducer