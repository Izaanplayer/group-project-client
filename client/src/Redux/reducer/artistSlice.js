import {createSlice} from '@reduxjs/toolkit';

export const artistSlice = createSlice({
    name: "artists",
    initialState:{
        artists:[],
        detail:{}
    },
    reducers: {
        getArtists: (state, action) => {
            state.artists = action.payload
        },
        getArtistsId : (state, action) => {
            state.detail = action.payload
        }
    }
})

export const {getArtists, getArtistsId} = artistSlice.actions

export default artistSlice.reducer