import { configureStore } from "@reduxjs/toolkit";
import artists from '../reducer/artistSlice'
import categories from '../reducer/categorySlice'

export default configureStore({
    reducer: {
        artists : artists,
        categories: categories
    },
    // reducerCategories:{
    //     categories: categories
    // }
})