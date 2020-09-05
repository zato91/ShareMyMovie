const Film = (state = [], action) => {
    switch (action.type) {
        case 'ADDFILM': 
             return [...state, action.payload];
        default:
            return state;
    }
    
}

export default Film;
