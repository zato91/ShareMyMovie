
const initialState = [];

const myMovies = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDFILM': 
                state = []
             return state.concat(action.payload);
            
        default:
            return state;
    }
}

export default myMovies;
