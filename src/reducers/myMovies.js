const myMovies = (state = [], action) => {
    switch (action.type) {
        case 'film': 
            return [...state, ...action.payload];
        case 'filmList':
            return state = 1;
        default:
            return state;
    }
}

export default myMovies;