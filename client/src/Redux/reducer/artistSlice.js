import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
    //estado inicial de artists:
    name: "artists",
    initialState:{
        artists:[],
        detail:{}
    },
    //reducers de artists:
    reducers:{
        getArtists: (state, action) =>{
            state.artists = action.payload
        },
        getArtistsId: (state, action) => {
            state.detail = action.payload 
        }
    }

})

//exportamos las funciondes del reducer
export const  {getArtists, getArtistsId} = artistSlice.actions // donde van a estar guardadas las funciones

export default artistSlice.reducer// lo que se le pasara al store