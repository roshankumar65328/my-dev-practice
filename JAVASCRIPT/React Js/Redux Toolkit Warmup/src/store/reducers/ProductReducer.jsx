import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    products: [],
};

export const ProductsReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action )=>{
            // console.log(action);
            state.products = action.payload;
            
        },
        productRemove: (state, action)=>{
            state.products.splice(action.payload, 1)
        }
        
    },
});

export default ProductsReducer.reducer;
export const {getProducts, productRemove} = ProductsReducer.actions;