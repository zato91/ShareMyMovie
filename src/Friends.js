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
      
    <div style={{ display:'inline-block'}}><h1>Connect with Friend</h1> 
    <ComboBox friends={friends}/>
    
    {/* <Button variant="contained" color="primary">
            Add friend
          </Button> */}
    
    <div id="friends">     
   <div id="poto">{friends.map(fro => <div id="poto1"><Button  style={{fontFamily:'Indie Flower',backgroundColor:'#d5f5eb',color:'black', width:'250px',marginBottom:'10px'}} variant="contained" color="primary">{fro}</Button> 
          <Button onClick={(()=>handledelete(fro))} style={{fontFamily:'Indie Flower',backgroundColor:'#d5f5eb', display:'inline-block', marginRight:'83px',marginBottom:'10px'}} variant="contained" color="red">X</Button></div>
          )}</div></div> 
      
     
      
      
      </div>
    </>

)};



export default Friends;


