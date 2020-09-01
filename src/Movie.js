import React from 'react';
import Search from './Search';
import MediaCard from './MediaCard'



const Movie = () => {
    return <div>
                <h1>Find a Movie</h1>
                <Search />
                <div id='movie'>
                <MediaCard />
               
                </div>
           </div>
};


export default Movie;