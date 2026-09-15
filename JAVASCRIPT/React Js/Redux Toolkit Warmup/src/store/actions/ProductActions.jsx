import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";


export const asyncGetProducts  = () => async(dispatch, getState)=>{
    try{
        const response = await axios.get("https://fakestoreapi.com/Products")
        // here we have sychronous data
        // console.log(response.data);
        dispatch(getProducts(response.data));
        
    }catch(err){
        console.log(err);
    }
}
