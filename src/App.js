import React, { useState, useRef } from 'react';
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



function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

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

   
  </>
  );
}

export default App;
