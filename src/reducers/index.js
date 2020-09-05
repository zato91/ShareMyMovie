import myMovies from "./myMovies";
import listMovie from "./ListMovie";
// importe other reducert and add to all reducers
import {combineReducers} from "redux";



const allReducers = combineReducers({
    myMovies,
    listMovie,
})

export default allReducers;