import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MediaCard2 from './MediaCard2'
import Grid from '@material-ui/core/Grid';
import {useSelector, useDispatch} from 'react-redux'
import listMovie from './reducers/ListMovie';
import Movie from './Movie';
import Film from './reducers/Film';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '10%',
    fontSize: 45,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  block: {
    display: "block" ,
    marginTop: '20px',
    marginBottom: '40px',
    backgroundColor: "#EFFFFA",
    color: "black",
    fontFamily: 'Indie Flower',
    fontSize:20
    
  },
}));

 

const MovieList = () => {

 const classes = useStyles();
 const lists = useSelector(state => state.listMovie)
 var films = useSelector(state => state.Film)
var myFlim = films
 
console.log(lists)

// function changeFilm(){
//   films.filter(film => film => {lists.map( list => film.list_movie_id === list.id)})
//  return
// }

function hello(e){
  
  let id = Number(e.target.parentNode.id)
   myFilm = films.filter(film => (film.list_movie_id === id) )
   
  
}
// function Parent(props) {
//     const [lines, setLines] = useState([0]);  
//     return lines.map(m => <Child key={m} caption={`Click ${m}`} pstate={{lines, setLines}}/>);
//   }
  


    return( <div  className={classes.root}>
                <h1>All My Movies</h1>
                <Grid container spacing={2} >
                    <Grid item xs={2} id="movieButton" >
                    
                    {/* <Button variant="contained" color="primary" className={classes.block}>All Movie</Button>
                    <Button variant="contained" color="primary" className={classes.block}>All Movie</Button> */}
                    {/* <Button list={list} variant="contained"  className={classes.block}>All Movie</Button> */}
                   { lists.map(list => <div style={{display: 'flex'}}><Button onClick={(e)=> hello(e)}  data-id={list.id} id={list.id} data-category={list.category} list={list} variant="contained" color="primary" className={classes.block}>{list.category}</Button>
                    <Button style={{color: "red", fontFamily:'Indie Flower', marginLeft: '-20%',
    marginBottom:' 10%', width:'20%'}} size="small" className={classes.root}>X</Button></div>)
                    }
                    </Grid>
                    <Grid item xs={9} sm={9} id="movies" >
                    { myFlim.map(film =>
                    <MediaCard2 key={film.id} film={film}/>
                    
                    )}
                    </Grid>
                </Grid>
           
    </div>
)};



export default MovieList;

