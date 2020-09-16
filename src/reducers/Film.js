// let initialState = {movies:[], filterMovies: []}

const Film = (state = [], action) => {
    switch (action.type) {
        case 'FILM': 
       state =[]
        console.log(state.concat(action.payload))
                return state.concat(action.payload);
           
            case 'FILTER':
                state = []
                return state.concat(action.payload);

            case 'DeleteMovie':
                 
                return state.filter(stat => stat.id !== action.payload )
                    
        default:
            return state;
    }
    
}

export default Film;

