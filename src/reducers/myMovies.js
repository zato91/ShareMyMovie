
const myMovies = (state = [], action) => {
    switch (action.type) {
        case 'ADDFILM': 
                state = []
             return state.concat(action.payload);
            
        default:
            return state;
    }
}

export default myMovies;
