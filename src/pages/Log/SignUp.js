import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  lia:{
    fontSize:"20px",
    color:"black"
  }

})); 






export default function SignUp() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleClick = () => {
    history.push("/welcome");
}

  let handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
      })
      .then(res => res.json())
      .then(data => {
        localStorage.token = data.token
        localStorage.username = data.user.username 
        localStorage.id = data.user.id  
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar style={{backgroundColor: "#EFFFFA"}}  className={classes.avatar}>
          <LockOutlinedIcon style={{color: "black"}}/>
        </Avatar>
        <Typography style={{color: "black"}} component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={(e) => {handleSubmit(e) 
         handleClick()}} 
        className={classes.form} noValidate>
          <TextField onChange={event => setUsername(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="UserName"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField onChange={event => setPassword(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor: "#EFFFFA"}}
            className={classes.submit}
          >
            Sign UP
          </Button>
          <Grid container>
            <Grid item style={{width: "100%"}}>
              <Link id="family" href="/" variant="body2" className={classes.lia}>
                {"Have an account? Sign IN"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}