import {configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { productByIdReducer } from "./slices/productByIdSlice";
import { productPaginationReducer } from "./slices/productPaginationSlice";
import { categoryReducer } from "./slices/categorySlice";
import { securityReducer } from "./slices/securitySlice";
import { forgotPasswordReducer } from "./slices/forgotPasswordSlice";
import { resetPasswordReducer } from "./slices/resetPasswordSlice";
import { cartReducer } from "./slices/cartSlice";
import { countryReducer } from "./slices/countrySlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        product: productByIdReducer,
        productPagination: productPaginationReducer,
        category: categoryReducer,
        security: securityReducer,
        forgotPassword: forgotPasswordReducer,
        resetPassword: resetPasswordReducer,
        cart: cartReducer,
        country: countryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})