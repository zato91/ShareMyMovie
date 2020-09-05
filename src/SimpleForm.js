






// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },

//   lia:{
//     fontSize:"20px",
//     color:"black"
//   }

// })); 






// export default function Login() {
//   const classes = useStyles();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleClick = () => {
//     if(localStorage.token) history.push("/welcome") 
// }

//   let handleSubmit = (e) => {
//     e.preventDefault()
//     fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           username: username,
//           password: password
//       })
//       })
//       .then(res => res.json())
//       .then(data => { 
//         if(data.token){
//         localStorage.token = data.token
//         localStorage.username = data.user.username 
//         localStorage.id = data.user.id 
//         }else {
          
//           let wrong = document.createElement("h1");
//           wrong.innerText = data.error
//           wrong.style.color = "red"
//           document.querySelector('.makeStyles-paper-1').append(wrong)
//         }
//         console.log(localStorage.username) 
//         console.log(data.error)  
//       })

      
      


//   }

//   return (
//     <Container component="main" maxWidth="xs">
//       <div className={classes.paper}>
//         <Avatar style={{backgroundColor: "#EFFFFA"}}  className={classes.avatar}>
//           <LockOutlinedIcon style={{color: "black"}}/>
//         </Avatar>
//         <Typography style={{color: "black"}} component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form onSubmit={(e) => {handleSubmit(e) 
//          handleClick()}} 
//         className={classes.form} noValidate>
//           <TextField onChange={event => setUsername(event.target.value)}
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="UserName"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField onChange={event => setPassword(event.target.value)}
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button 
//             type="submit"
//             fullWidth
//             variant="contained"
//             style={{backgroundColor: "#EFFFFA"}}
//             className={classes.submit}
            
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item style={{width: "100%"}}>
//               <Link id="family" href="/signup" variant="body2" className={classes.lia}>
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </Container>
//   );
// }

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SimpleForm() {
  const classes = useStyles();
  const [currency, setCurrency] = useState('');
  const [list, setList] = useState('');
  

//   const [username, setUsername] = React.useState('');
//   onChange={event => setUsername(event.target.value)}

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };



let handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            //   username: username,
            //   list: list
          })
          })
          .then(res => res.json())
          .then(data => { console.log(data)
          
          })
      }

  return ( 
 <>
    <div>
    <form onSubmit={(e) => {handleSubmit(e) 
         }} 
        className={classes.form} noValidate>
            
   
    <Button  style={{margin: '20px 8px 25px'}} variant="contained" color="secondary">Create List</Button>
  
    <TextField onChange={event => setList(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="list"
            label="list"
            type="list"
            id="list"
            autoComplete="current-list" >
    </TextField> 

    <Button  style={{margin: '20px 8px 50px'}} variant="contained" color="secondary">Or Add existing List</Button>
        <TextField
          id="outlined-select-currency-native"
          select
          label="setCurrency"
          value={currency}
          onChange={event => setCurrency(event.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              
            </option>
          ))}
        </TextField>
        <Button 
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor: "#EFFFFA"}}
            className={classes.submit}
          >
            ADD Movie
          </Button>
      
          </form>
   
    </div>
    
   </> 
          
    
  
)}