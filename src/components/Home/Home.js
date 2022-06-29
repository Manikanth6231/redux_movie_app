import React ,{useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing"
import movieApi from '../../common/apis/movieApi'
import {APIKey} from "../../common/apis/MovieApiKey"
import { useDispatch } from "react-redux";
import { fectchAsyncMovies, fectchAsyncShows } from '../../features/movies/movieSlice';
const Home = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fectchAsyncMovies());
        dispatch(fectchAsyncShows());
    },[]);
    return (
        <div className='banner-img'>
           <MovieListing/>
        </div>
    );
};

export default Home;