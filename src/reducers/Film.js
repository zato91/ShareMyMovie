// let initialState = {movies:[], filterMovies: []}

const Film = (state = [], action) => {
    switch (action.type) {
        case 'FILM': 
        console.log(action.payload)
                return state.concat(action.payload);
            //  return {
            //      ...state,
            //      movies: state.movies.contact(action.payload),
            //      filterMovies: state.filterMovies.contact(action.payload)
            //  }
            case 'FILTER':
                state = []
                return state.concat(action.payload);
        default:
            return state;
    }
    
}

export default Film;

