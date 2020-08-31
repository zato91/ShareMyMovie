import React, { useState, useRef } from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './Navbar';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hook.js';

import { theme } from './theme';
import { Burger, Menu } from './components';
// import FocusLock from 'react-focus-lock';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
    <> 
    <ThemeProvider theme={theme}>
      
      
        <div ref={node}>
          {/* <FocusLock disabled={!open}> */}
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          {/* </FocusLock> */}
        </div>
        
    
    </ThemeProvider>
   
    <Navbar />
    <Login />
    <SignUp />

   
    </>
  );
}

export default App;
