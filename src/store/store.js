import { configureStore } from "@reduxjs/toolkit";
import sliceCategory from "./sliceCategory";
import sliceProducts from "./sliceProducts";
import sliceCart from "./sliceCart";


const store = configureStore({
    reducer: {
        products: sliceProducts,
        category: sliceCategory,
        cart: sliceCart
    }
})

export default store