import {listmovie, films, allFriend} from './actions';
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hook.js';
import {Route} from "react-router-dom";
import { theme } from './theme';
import { Burger, Menu } from './components';
import Log from '../src/pages/Log';
import Welcome from '../src/pages/Welcome'
import Goodbye from '../src/pages/Goodbye'
import Movie from '../src/pages/Movie';
import MovieList from '../src/pages/MovieList';
import ShareList from '../src/pages/ShareList';
import Friends from '../src/pages/Friends';
import Chat from './Chat';
import { useDispatch } from "react-redux"






function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const dispatch = useDispatch()
    


  useEffect(() => {
    
    if(localStorage.id){
      fetch('http://localhost:3000/users/'+ localStorage.id)
      .then(resp => resp.json())
      .then(data => { dispatch(listmovie(data))}) }

      fetch('http://localhost:3000/users/'+ localStorage.id)
      .then(resp => resp.json())
      .then(data => { console.log(data.movies)
          dispatch(films(data.movies))})



      fetch('http://localhost:3000/users/')
      .then(resp => resp.json())
      .then(data => {  
      
      let newUser = data.map(dat => {
          const container = {};
          container.title = dat.username;
          container.year = dat.id;
          return container
      })

      dispatch(allFriend(newUser))  
      
      })

},[]) 

 


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
    <Route path="/goodbye" component={Goodbye} />
    <Route path="/movie" component={Movie} />
    <Route path="/movielist" component={MovieList} />
    <Route path="/sharelist" component={ShareList} />
    <Route path="/friends" component={Friends} />
    <Route path="/chat" component={Chat} />
    
    
 
  </>
  );
}

export default App;
