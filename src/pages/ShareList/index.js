import React from 'react';
import Button from '@material-ui/core/Button';
import PotatoChips from './PotatoChips';
import {Route, useHistory} from "react-router-dom";
import MAD_Dog from "./MAD_Dog"


const ShareList = () => {
  const history = useHistory();


  function go(){
    history.push('/sharelist/PotatoChips' ); 
  }

  function po(){
    history.push('/sharelist/MAD_Dog' ); 
  }

    return (

        <><h1>Friends Recommendations</h1>
       
          
          <Button  onClick={()=> go()} style={{marginRight: '30px',fontFamily:'Indie Flower',backgroundColor:'#d5f5eb',color:'black', width:'250px'}} variant="contained" color="secondary">
             PotatoChips<span style={{marginLeft: "135px",fontSize:'20px'}}>X</span>
          </Button>
        
          
          <Button  onClick={()=> po()} style={{marginRight: '30px',fontFamily:'Indie Flower',backgroundColor:'#d5f5eb',color:'black', width:'250px'}} variant="contained" color="secondary">
            Mad_Dog<span style={{marginLeft: "135px",fontSize:'20px'}}>X</span>
          </Button>
          <Route path="/sharelist/PotatoChips" component={PotatoChips} />
          <Route path="/sharelist/MAD_Dog" component={MAD_Dog} />
          </>
        
    
    )
};

export default ShareList;