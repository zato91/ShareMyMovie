import React from 'react';
import Search from './Search';
import MediaCard from './MediaCard'
import { useSelector, useDispatch } from "react-redux"
import myMovis from './reducers/myMovies';
import {incr} from './actions';



const Movie = () => {
    const movieNum =  useSelector(state => state.myMovies)
    const dispatch = useDispatch()

    return <div>
                <h1>Find a Movie {movieNum}</h1>
                {/* <button onClick={()=> dispatch(incr(5))}>X</button> */}
                <Search />
                <div id='movie'>
                {/* <MediaCard /> */}
               
                </div>
           </div>
};


export default Movie;