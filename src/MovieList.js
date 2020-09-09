import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MediaCard2 from './MediaCard2'
import Grid from '@material-ui/core/Grid';
import {useSelector, useDispatch} from 'react-redux'
import {filter, deletelist} from './actions' 
 

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
 const films = useSelector(state => state.Film)
 const dispatch = useDispatch();

 
console.log(lists)

function handleList(e){
  let listId = Number(e.target.parentNode.id)
  console.log('http://localhost:3000/list_movies/' + listId)
  fetch('http://localhost:3000/list_movies/' + listId, {method: 'DELETE',})

 
 let listNew = lists.filter(lisT => lisT.id !== listId )
 console.log(listNew)
 dispatch(deletelist(listNew))
//  dispatch(filter(films)
let myFilm = []
dispatch(filter(myFilm))
 
}


function hello(e){
  
     let listId = Number(e.target.parentNode.id)

    fetch('http://localhost:3000/users/'+ localStorage.id)
          .then(resp => resp.json())
          .then(data => {
              if(listId){
    let myFilm = data.movies.filter(film => film.list_movie_id === listId )
    console.log(myFilm)
    dispatch(filter(myFilm)) } else {
      dispatch(filter(data.movies))
    }
    
     })

} 

  


    return( <div  className={classes.root}>
                <h1>All My Movies</h1>
                <Grid container spacing={2} >
                    <Grid item xs={2} id="movieButton" >
                    
                  
                    <div style={{display: 'flex'}}><Button onClick={(e)=> hello(e)} variant="contained" color="primary" className={classes.block}>All Movie</Button>
                    </div>

                   { lists.map(list => <div style={{display: 'flex'}}><Button onClick={(e)=> hello(e)}  data-id={list.id} id={list.id} data-category={list.category} list={list} variant="contained" color="primary" className={classes.block}>{list.category}</Button>
                    <Button onClick={(e)=> handleList(e)} data-id={list.id} id={list.id} style={{color: "red", fontFamily:'Indie Flower', marginLeft: '1%',
    marginBottom:' 10%', width:'20%'}} size="small" className={classes.root}>X</Button></div>)
                    }
                    </Grid>
                    <Grid item xs={9} sm={9} id="movies" >
                    { films.map(film =>
                    <MediaCard2 key={film.id} film={film}/>
                    
                    )}
                    </Grid>
                </Grid>
           
    </div>
)};
                    
                    

export default MovieList;

