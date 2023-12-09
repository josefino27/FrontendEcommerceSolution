import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from  "../Utilities/axios";
import { delayedTimeout } from "../Utilities/delayedTimeout";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (ThunkApi, {rejectWithValue}) => {
        
        try{
            await delayedTimeout(1000);
            return await axios.get(`/api/v1/product/list`);
        }catch(err){
            return rejectWithValue(`Errores: ${err.message}`);
        }

    }
)