import React from 'react';
import Search from './Search';
import { useSelector } from "react-redux"
import MediaCard from './MediaCard';



const Movie = () => {
    const movies =  useSelector(state => state.myMovies)
   
    return <div>
                <h1>Find a Movie </h1>
                <Search />
                <div id='movie'>
                {movies.map((movie) => 
                    <MediaCard 
                        name={movie.name} 
                        picture={movie.picture} 
                        url_des={movie.external_ids.imdb.url} 
                        displayOn={movie.locations[0].display_name} 
                        display_url={movie.locations[0].url} 
                        
                    />    
                )}
                </div>
           </div>
};


export default Movie;