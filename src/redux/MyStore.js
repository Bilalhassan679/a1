import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
const MyStore=configureStore({
    reducer:{
        cartList:cartReducer
    },
})

export default MyStore;