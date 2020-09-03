import myMovies from "./myMovies";
// importe other reducert and add to all reducers
import {combineReducers} from "redux";



const allReducers = combineReducers({
    myMovies
})

export default allReducers;