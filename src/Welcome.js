import React, {useEffect} from 'react';
import { useDispatch } from "react-redux"
import {listmovie, films, allFriend} from './actions';



export default function Welcome() {
    const dispatch = useDispatch()
    


    useEffect(() => {
        fetch('http://localhost:3000/users/'+ localStorage.id)
        .then(resp => resp.json())
        .then(data => { dispatch(listmovie(data))     }  )
    }, [])


    useEffect(() => {
        fetch('http://localhost:3000/users/'+ localStorage.id)
        .then(resp => resp.json())
        .then(data => {
            dispatch(films(data.movies))})
    }, [])


    useEffect(() => {
        fetch('http://localhost:3000/users/')
        .then(resp => resp.json())
        .then(data => {  
        
        let newUser = data.map(dat => {
            const container = {};
            container.title = dat.username;
            container.year = dat.id;
            
            return container
        
        } )
        dispatch(allFriend(newUser))  
        
        })
    }, [])

    return <>
        <h1>hi {localStorage.username}</h1> 
        <img id='welcome' src="image/hi.gif" alt="Girl in a jacket"/>
        
    </>
};



