// let initialState = {movies:[], filterMovies: []}

const Film = (state = [], action) => {
    switch (action.type) {
        case 'FILM': 
        if(action.payload){
          [...state, ...action.payload] }
            
                return state;
           
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

