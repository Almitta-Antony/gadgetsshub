import { configureStore } from "@reduxjs/toolkit";
import productDetailSlice from "../redux/productDetailSlice";

export const store=configureStore({
   reducer:{
        app:productDetailSlice
    },
})

export default store