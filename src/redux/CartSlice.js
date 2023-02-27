import {createSlice} from '@reduxjs/toolkit';
initialState=[];
const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem(state,action){
            state.push(action.payload);
        },
        removeCartItem(state,action){
            const deleteArray = state.filter((item, index) => {
                return index !== action.payload
            
            });
            return deleteArray;
            // return state.filter((index,item) => index !== action.payload); // remove equal index obj
        },
    }
})
export const {addCartItem,removeCartItem}=CartSlice.actions;
export default CartSlice.reducer