import React from 'react';


export default function Welcome() {
    return <>
        <h1>{localStorage.username}</h1> 
        <img id='welcome' src="image/hi.gif"/>
    </>
};



