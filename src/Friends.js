import React from 'react';
import ComboBox from './ComboBox';
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button';




const Friends = () => {
    const friends = useSelector(state => state.Friends)
   
    return (

    <div style={{ display:'inline-block'}}><h1>Friends</h1> <ComboBox friends={friends}/>
    {/* <Button variant="contained" color="primary">
            Add friend
          </Button> */}
    
            
          {friends.map(fro =><Button style={{ display:'block'}} variant="contained" color="primary">{fro}</Button> )}
      
     
      
      </div>
    

)};



export default Friends;