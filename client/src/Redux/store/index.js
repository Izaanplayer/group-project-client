import { configureStore } from "@reduxjs/toolkit";
import artists from '../reducer/artistSlice'

export default configureStore({
    reducer :{
        artists : artists,
        // categories: categories
    }
})