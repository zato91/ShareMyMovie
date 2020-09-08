const listMovie = (state = [], action) => {
    switch (action.type) {
        case 'LISTMOVIE': 
                state =[]
             return [...state, ...action.payload.list_movies];
        case 'DeleteList': 
                state =[]
            return [...state, ...action.payload];
        
        default:
            return state;
    }
    
}

export default listMovie;
