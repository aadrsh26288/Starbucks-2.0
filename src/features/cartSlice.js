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
          }
    }
})

export const { add , remove} = cartSlice.actions

export default cartSlice.reducer