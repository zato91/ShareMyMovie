const Film = (state = [], action) => {
    switch (action.type) {
        case 'FILM': 
        console.log(action.payload)
             return state.concat(action.payload);
        default:
            return state;
    }
    
}

export default Film;

