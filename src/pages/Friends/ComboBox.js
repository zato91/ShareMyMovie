import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import {friend} from '../../actions'

export default function ComboBox(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.Users)
    const top100Films = users

    function hello(e){
       
      let x =  document.getElementById('combo-box-demo').value
      console.log(x)
      dispatch(friend(x))
    }
   



  return (
   <> <Autocomplete
      id="combo-box-demo"
      
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params}  label="Combo box" variant="outlined" />}
    />
    
    <Button  onClick={(e)=>hello(e)}variant="contained"  style={{fontFamily:'Indie Flower',backgroundColor:'#d5f5eb',width:'300px', marginRight: '172px'}}>
            Add friend
          </Button>
          </>
  );
}

