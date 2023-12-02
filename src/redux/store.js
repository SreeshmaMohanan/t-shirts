import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
import tshirtSlice from "./slices/tshirtSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice,
        tshirtSlice
    
    }
})
export default store