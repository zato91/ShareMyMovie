import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Dialog from './Dialog';
import Rating from '@material-ui/lab/Rating';
import {filter} from './actions';
import {useSelector, useDispatch} from 'react-redux'






const useStyles = makeStyles({
  root: {
    width: 310,
    margin: '20px 20px',
    
   
    
  },
  media: {
    height: 140,
     
  },

  bu: {
    margin: '5px',
    backgroundColor: '#5f9ea0',
    fontFamily: 'Indie Flower',
  },
});

export default function MediaCard2(props) {
  const classes = useStyles();
  const film = props.film
  const films = useSelector(state => state.Film)
  const dispatch = useDispatch();

 function handleShare(id){

  fetch('http://localhost:3000/movies/' +id, {method: 'DELETE',})
  
  let myFilm = films.filter(filme => filme.id !== id )
  
  dispatch(filter(myFilm)) 
}
  

  function handleDelete(id){

    fetch('http://localhost:3000/movies/' +id, {method: 'DELETE',})
    
    let myFilm = [films.filter(filme => filme.id !== id )]
    
    dispatch(filter(myFilm)) 
  }

  

  return (
    <Card className={classes.root} id="tosh">
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={film.picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {film.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          
          <Button variant="contained" className={classes.bu} href={film.extra_url} target="_blank">{film.extra_info}</Button>
          <Button  variant="contained" className={classes.bu} href={film.description} target="_blank">Description</Button>
          
            
          
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <Rating name="read-only" value={film.rating} readOnly />
      <CardActions>
      {/* <Dialog movie={film}/> */}
      <Button style={{color: "red", fontFamily:'Indie Flower'}} size="small" className={classes.root}>
          Edit Movie
        </Button> 
        <Button onClick={()=>handleDelete(film.id)} style={{color: "red", fontFamily:'Indie Flower'}} size="small" className={classes.root}>
          delete movie
        </Button> 
         <Button onClick={handleShare} style={{color: "red", fontFamily:'Indie Flower'}} className={classes.root}>
         Share Movie
        </Button>
       
      </CardActions>
    </Card>

   
  );
}




