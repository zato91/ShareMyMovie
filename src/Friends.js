import React from 'react';
import ComboBox from './ComboBox';
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import {deletefriend} from './actions';






const Friends = () => {
    const friends = useSelector(state => state.Friends)
    const dispatch = useDispatch();

    function handledelete(friend){
      dispatch(deletefriend(friend))
    }
    return (
      <>  
      <div id="friends"></div>
    <div style={{ display:'inline-block'}}><h1>Follow Friends</h1> 
    <ComboBox friends={friends}/>
    
    {/* <Button variant="contained" color="primary">
            Add friend
          </Button> */}
    
            
   <div id="poto">{friends.map(fro => <div id="poto1"><Button  variant="contained" color="primary">{fro}</Button> 
          <Button onClick={(()=>handledelete(fro))} style={{ display:'inline-block'}} variant="contained" color="red">X</Button></div>
          )}</div>
      
     
      
      
      </div>
    </>

)};



export default Friends;


