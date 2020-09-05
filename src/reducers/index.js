import myMovies from "./myMovies";
import listMovie from "./ListMovie";
import Film from "./Film";
// importe other reducert and add to all reducers
import {combineReducers} from "redux";



const allReducers = combineReducers({
    myMovies,
    listMovie,
    Film,
})

export default allReducers;