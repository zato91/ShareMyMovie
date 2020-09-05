import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleForm from './SimpleForm';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector } from "react-redux"



function rand() {
  return Math.round(Math.random() * 20) - 10;
}



let i = 1;
let ratings =[]
while (i < 11) {
    ratings.push({value: i, label: i})
  i++;
}



  
  

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [isToggled, setToggled] = React.useState(true);
  const [username, setUsername] = React.useState('');
  const [currency, setCurrency] = React.useState('');
  const [list, setList] = React.useState('');
  const [rating, setRating] = React.useState(5);
  const lists=  useSelector(state => state.listMovie)

  let currencies = lists.map(list=> list.category)

let y = 0;
let rat = []
while (y < currencies.length) {
    rat.push({value: currencies[y], label: currencies[y]})
  y++;
}
  console.log(rat)

  const handleOpen = () => {
    setOpen(true);
  };

  const toggleTrueFalse = () => setToggled(!isToggled);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
    
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
            
            autoComplete="current-list" >
    </TextField> 

    <Button  style={{margin: '20px 8px 50px'}} variant="contained" color="secondary">Or Add existing List</Button>
        <TextField
        //   id="outlined-select-currency-native"
          select
        //   label="setCurrency"
          value={currency}
          onChange={event => setCurrency(event.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="outlined"
        >
          {rat.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <h4 style={{color:'black'}}>Give a rating</h4>
        <TextField
          select
          
          value={rating}
          onChange={event => setRating(event.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Give a rating"
          variant="outlined"
        >
          {ratings.map((option) => (
            <option key={option.value} value={option.value}>
                 {option.label}
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
  );

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
    <div>
         
      
      <Button style={{color: "red", fontFamily:'Indie Flower'}} size="small" className={classes.root} onClick={handleOpen} >
          Add movie to list
      </Button>
       
        
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

// import React, {Component, useState} from 'react'
// import { Modal } from 'semantic-ui-react'
// import { withRouter } from 'react-router-dom';
 

// class LoginModal extends Component{

//   state = {
//     open: false,
//   }

//     handleChange = (e) => {
//       this.setState({
//         [e.target.name]: e.target.value
//       })
//     }

//     redirectTo = () => {
//       const { history } = this.props;
//       if(history) history.push("/game");
//      }
    
//     login = (e) => {
//       e.preventDefault()
//       let user =   {username: this.state.username, password: this.state.password}
//       fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(
//           {user}
//         )
//       })
//       .then(res => res.json())
//       .then(data => { 
//          localStorage.token = data.token
//          if (!data.error){
//            this.props.getCharacters(e);}
//       })
      
//     }
    
    
   
//     render(){
        
//       return(
//         <Modal
//         trigger = {<button className= "ui teal button">Login</button>}
//         open= {this.state.open}
//         onOpen = { ()=> { this.setState({
//           open: true
//         })}}
//         >
//           <Modal.Header>Login</Modal.Header>
//           <Modal.Content>
//           <div>
//               <h2>Login</h2>
//               <form onSubmit={(e) => {
//                 this.login(e)
//                 this.setState({ open: false})
//                 this.redirectTo()  
//               }
//             }
              
//               >
//               <label>UserName</label>
//               <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
//               <label>Password</label>
//               <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
//               <input type="submit"/>
//                </form>
//           </div>
//           </Modal.Content>
//         </Modal>
//       )
//     }
// }

// export default withRouter(LoginModal)
