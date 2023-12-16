import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../constants/AppConstants";
import { delayedTimeout } from "../utilities/delayedTimeout";
import axios from '../utilities/axios'

export const saveOrder = createAsyncThunk(
  "order/saveOrder",
  async (params, { rejectWithValue }) => {
    try {
      const requestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = axios.post(`/api/v1/order`, params, config);
      localStorage.setItem("mercadopagoApi", data.stripeApiKey);
      await delayedTimeout(1000);

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
