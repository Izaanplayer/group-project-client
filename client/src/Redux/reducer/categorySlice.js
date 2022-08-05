import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    //estado inicial de artists:
    name: "categories",
    initialState:{
        categories:[],
        // detail:{}.
    
    },
    //reducers de artists:
    reducers:{
        getCategories: (state, action) =>{
            state.categories = action.payload
        },
        // getCategoriesId: (state, action) => {
        //     state.detail = action.payload 
        // }
    }

})

//exportamos las funciondes del reducer
export const  {getCategories} = categorySlice.actions // donde van a estar guardadas las funciones

export default categorySlice.reducer// lo que se le pasara al store