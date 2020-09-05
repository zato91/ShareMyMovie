import React, { useState, useRef,useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hook.js';
import {Route} from "react-router-dom";
import { theme } from './theme';
import { Burger, Menu } from './components';
import Log from './Log';
import Welcome from './Welcome';
import Movie from './Movie';

import SimpleRating from './SimpleRating';
import {listmovie} from './actions';
import { useDispatch } from "react-redux"
import AddMovie from './AddMovie';


function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const node = useRef();
  const menuId = "main-menu";
  // const movies =  useSelector(state => state.myMovies)
  
//   useEffect(() => {
//     fetch('http://localhost:3000/users/'+ localStorage.id)
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data)
        
//         // dispatch(listmovie(data))
//     })
// }, [])



  useOnClickOutside(node, () => setOpen(false));
  return (
  <> 
   
    <ThemeProvider theme={theme}> 
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />  
        </div>    
    </ThemeProvider>
   
    <Navbar />
    <Route path="/" component={Log} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/movie" component={Movie} />
    {/* <Route path="/movie/form" component={AddMovie} /> */}
    <Route path="/movie/form" component={AddMovie} />
    
   
   {/* <SimpleRating /> */}
 
  </>
  );
}

export default App;
