import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useSelector } from "react-redux"
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState("");
  const [currency, setCurrency] = React.useState('');
  const lists=  useSelector(state => state.listMovie)
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

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Movie
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            Create a List
          </DialogContentText>
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
    <DialogContentText>
            Or existing List
          </DialogContentText>
    <TextField
        //   id="outlined-select-currency-native"
          select
        //   label="setCurrency"
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
          <Button onClick={handleClose} color="primary">
            AddMovie
          </Button>
          
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
