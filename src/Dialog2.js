import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useSelector } from "react-redux"



export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const friends=  useSelector(state => state.Friends)
  const [currency, setCurrency] = React.useState("");


  

  let y = 0;
    let rat = []
    while (y < friends.length) {
    rat.push({value: friends[y], label: friends[y]})
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
      <Button  style={{color: "red", fontFamily:'Indie Flower'}} onClick={handleClickOpen}>
        Share Movie
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    
        <DialogContent>

          <h3>Share To</h3>
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
      



        <DialogActions>

           
          <Button onClick={() => {
                handleClose();
                
                } } style={{margin: 'auto'}}>
            Share Movie
          </Button>
          
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
