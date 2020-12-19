import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';


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

export default function MediaCard3(props) {
  const classes = useStyles();
  const film = props.film

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
        <Button onClick={()=>props.handleDelete(film.id)} style={{color: "red", fontFamily:'Indie Flower'}} size="small" className={classes.root}>
          delete movie
        </Button>   
      </CardActions>
    </Card> 
  );
}




