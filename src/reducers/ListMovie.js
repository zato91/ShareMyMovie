const listMovie = (state = [], action) => {
    switch (action.type) {
        case 'LISTMOVIE': 
                
             return [...state, ...action.payload.list_movies];
        case 'DELETELIST': 
                
            return state.filter(lisT => lisT.id !== action.payload )
        
        default:
            return state;
    }
    
}

export default listMovie;
