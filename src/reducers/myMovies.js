
const initialState = [];

const myMovies = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDFILM': 
             return state.concat(action.payload);
            
        default:
            return state;
    }
}

export default myMovies;

// let clientList =  [...state.clientList, action.client];
//             return {
//               ...state,
//               clientList : clientList
//             }