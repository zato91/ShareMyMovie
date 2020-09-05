const listMovie = (state = [], action) => {
    switch (action.type) {
        case 'LISTMOVIE': 
             return state.concat(action.payload);
        default:
            return state;
    }
    
}

export default listMovie;
