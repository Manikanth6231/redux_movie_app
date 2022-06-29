import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
// import {extraReducers}
 export const fectchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async ()=>{
    const movieText="Harry";
    const response=await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
    console.log("The response from API :",response);
    return response.data;
} );
export const fectchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async ()=>{
    const movieText="Friends";
    const response=await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=series`);
    console.log("The response from API :",response);
    return response.data;
} );
export const fectchAsyncMovieOrShowDetail=createAsyncThunk('movies/fectchAsyncMovieOrShowDetail',
async (id)=>{
    // const movieText="Friends";
    const response=await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    console.log("The response from API :",response);
    return response.data;
} );
// export const removeSelectedMovieOrShow=createAsyncThunk('movies/fectchAsyncMovieOrShowDetail',
// async ()=>{
//     // const movieText="Friends";
//     // const response=await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
//     // console.log("The response from API :",response);
//     return initialState;
// } );
const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
};
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies:(state,{payload})=>{
        //     state.movies=payload;
        //     //before we used to use {...state,payload}
        //     //slice thing avoids all complications
        // },
        removeSelectedMOvieOrShow:(state)=>{
            state.selectedMovieOrShow={};
        }
        
    },
    extraReducers:{
        [fectchAsyncMovies.pending]:()=>{
            console.log("Pending");
        },
        [fectchAsyncMovies.fulfilled]: (state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state,movies:payload};
        },
        [fectchAsyncMovies.rejected]: ()=>{
            console.log("Rejected");
        },
        [fectchAsyncShows.fulfilled]: (state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state,shows:payload};
        },
        [fectchAsyncMovieOrShowDetail.fulfilled]: (state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state,selectedMovieOrShow:payload};
        },
       
    },
});
export const {removeSelectedMOvieOrShow}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getSelectedMovieOrShow=(state)=>state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
