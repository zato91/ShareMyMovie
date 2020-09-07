import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useSelector, useDispatch } from "react-redux"
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState("");
  const lists=  useSelector(state => state.listMovie)
  const [currency, setCurrency] = React.useState("");
  
  const [rating, setRating] = React.useState(2);
  let currencies = lists.map(list=> list.category)

  

  let y = 0;
    let rat = []
    while (y < currencies.length) {
    rat.push({value: currencies[y], label: currencies[y]})
     y++;
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMovie = () => {
    console.log(props.movie)
    console.log(list)
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name: props.movie.name,
          picture: props.movie.picture,
          rating: rating,
          description: props.movie.url_des,
          extra_info: props.movie.displayOn,
          extra_url: props.movie.display_url,
          list_movie : list,
          existing_list: currency,
          id: localStorage.id

      })
      })
      .then(res => res.json())
      .then(data => { 
        // if(!data.error){
        
          
        //   let wrong = document.createElement("h1");
        //   wrong.innerText = data.error
        //   wrong.style.color = "red"
        //   document.querySelector('.makeStyles-paper-1').append(wrong)
        // }
       
      })
  };

  return (
    <div>
      <Button  style={{color: "red", fontFamily:'Indie Flower'}} onClick={handleClickOpen}>
        Add Movie
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText> */}
            <h3>Create a List</h3>
          {/* </DialogContentText> */}
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
    {/* <DialogContentText>
            Or 
          </DialogContentText> */}
          <h3>or List</h3>
    <TextField
        //   id="outlined-select-currency-native"
          select
          label="List"
          value={currency}
          onChange={event => setCurrency(event.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your list"
          variant="outlined"
        >
          {rat.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </DialogContent>
            
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Give a Rate</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>



        <DialogActions>

           
          <Button onClick={() => {
                handleClose();
                handleMovie();
                } } style={{margin: 'auto'}}>
            AddMovie
          </Button>
          
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
