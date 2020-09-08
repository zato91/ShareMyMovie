import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory} from "react-router-dom";
import Dialog from './Dialog';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';






const useStyles = makeStyles({
  root: {
    width: 310,
    margin: '20px 20px',
    height: '370'
   
    
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
  const history = useHistory();
  const film = props.film
  
  const [value, setValue] = React.useState(2);

  

  function listCreation(movie){
    history.push("/movie/form") 

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
          
          <Button variant="contained" className={classes.bu} href={film.display_url} target="_blank">On: {film.displayOn}</Button>
          <Button  variant="contained" className={classes.bu} href={film.url_des} target="_blank">Description</Button>
          
            
          
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <Rating name="read-only" value={film.rating} readOnly />
      <CardActions>
      {/* <Dialog movie={film}/> */}
      <Button style={{color: "red", fontFamily:'Indie Flower'}} size="small" className={classes.root}>
          Edit Movie
        </Button> 
        <Button style={{color: "red", fontFamily:'Indie Flower'}} size="small" className={classes.root}>
          delete movie
        </Button> 
         <Button onClick={listCreation}style={{color: "red", fontFamily:'Indie Flower'}} className={classes.root}>
         Share Movie
        </Button>
       
      </CardActions>
    </Card>

   
  );
}




