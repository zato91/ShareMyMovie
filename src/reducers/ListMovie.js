const listMovie = (state = [], action) => {
    switch (action.type) {
        case 'LISTMOVIE': 
             return [...state, ...action.payload.list_movies];
        default:
            return state;
    }
    
}

export default listMovie;
