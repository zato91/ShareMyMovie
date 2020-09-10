import myMovies from "./myMovies";
import listMovie from "./ListMovie";
import Film from "./Film";
import Users from "./Users";
import Friends from "./Friends";
// importe other reducert and add to all reducers
import {combineReducers} from "redux";



const allReducers = combineReducers({
    myMovies,
    listMovie,
    Film,
    Users,
    Friends,
})

export default allReducers;