import React from 'react';
import {Route} from 'react-router-dom';
import Login from "./Login";
import SignUp from './SignUp';



export default function Log() {
    return <> 
    {!localStorage.token ? <>
    <Route exact path="/" component={Login}/>
    <Route path="/signup" component={SignUp} /> </> : null }
    </>
};



