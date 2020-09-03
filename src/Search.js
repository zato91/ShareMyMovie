import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {addfilm} from './actions';
import { useSelector, useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({

    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: '-8px',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  
  })); 


export default  function Search() {
    const classes = useStyles();
    const dispatch = useDispatch()
    // const arr = useSelector(state=> state.myMovies)
  
  const [movie, setmovie] = useState('');
  

  let  handleSubmit = (e) => {
      e.preventDefault()
    let url = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movie}&country=us`
        
    console.log(url)
    fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": "3d80bfb1fcmsha6879bf3856fa03p19e354jsnec261fdd4c92"
        }
      })
      .then(res => res.json())
      .then(movies => {
        
        dispatch(addfilm(movies.results))
        
      })
      .catch(err => {
        console.log(err);
      });
    }
    return (
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            
            <form onSubmit={(e) => handleSubmit(e) } 
            className={classes.form} noValidate>
              
              <TextField onChange={event => setmovie(event.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="movie"
                label="movie"
                type="movie"
                id="movie"
                autoComplete="current-movie"
              />
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                style={{backgroundColor: "#EFFFFA"}}
                className={classes.submit}   
              >
                Search
              </Button>
              
            </form>
          </div>
    
        </Container>
      );

    }




















      


  

  
