import React from 'react';
import Search from './Search';
// import { useSelector, useDispatch } from "react-redux"




const Movie = () => {
    // const movieNum =  useSelector(state => state.myMovies)
    // const dispatch = useDispatch()

    return <div>
                <h1>Find a Movie </h1>
                {/* <button onClick={()=> dispatch(incr(5))}>X</button> */}
                <Search />
                <div id='movie'>
                {/* <MediaCard /> */}
               
                </div>
           </div>
};


export default Movie;