import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SimpleRating from './SimpleRating'
import { useSelector } from "react-redux"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

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
            To add a movie select a list or create one
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <SimpleRating/>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            AddMovie
          </Button>
          
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
