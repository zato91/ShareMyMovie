import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MediaCard2 from './MediaCard2'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '10%',
    
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
  },
}));

 

const MovieList = () => {

    const classes = useStyles();



    return( <div  className={classes.root}>
                <h1>My Movies</h1>
                <Grid container spacing={2} >
                    <Grid item xs={2} id="movieButton" >
                    
                    <Button variant="contained" color="primary" className={classes.block}>All Movie</Button>
                    <Button variant="contained" color="primary" className={classes.block}>All Movie</Button>
                    </Grid>
                    <Grid item xs={9} sm={9} id="movies" >
                   
                    <MediaCard2 />
                    <MediaCard2 />
                    <MediaCard2 />
                    <MediaCard2 />
                    </Grid>
                </Grid>
           
    </div>
)};



export default MovieList;

