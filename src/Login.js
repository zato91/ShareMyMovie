// import React, {Component} from 'react'

// class Login extends Component{

//     handleChange = (e) => {
//       this.setState({
//         [e.target.name]: e.target.value
//       })
//     }

//     handleSubmit = (e) => {
//       e.preventDefault()

//       fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           username: this.state.username,
//           password: this.state.password
//         })
//       })
//       .then(res => res.json())
//       .then(data => {
//         localStorage.token = data.token
//         console.log(localStorage.token)
         
//       })
   
//     }


//     render(){
//         return(
//         <div>
//              <h2>Login</h2>
//             <form onSubmit={(e) => this.handleSubmit(e)}>
//             <label>UserName</label>
//             <input onChange={(e) => this.handleChange(e)} name="username" type="text"  />
//             <label>Password</label>
//             <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
//             <input type="submit"/>
//             </form>
//         </div>
//         )
//     }
// }

// export default Login

import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




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






export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
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
        console.log(localStorage.token)   
      })
  }
  
  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar style={{backgroundColor: "#EFFFFA"}}  className={classes.avatar}>
          <LockOutlinedIcon style={{color: "black"}}/>
        </Avatar>
        <Typography style={{color: "black"}} component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form} noValidate>
          <TextField onChange={event => setPassword(event.target.value)}
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
          <TextField onChange={event => setUsername(event.target.value)}
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
            Sign In
          </Button>
          <Grid container>
            <Grid item style={{width: "100%"}}>
              <Link id="family" href="#" variant="body2" className={classes.lia}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}