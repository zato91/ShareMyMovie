export const addfilm = (obj) => {
    
    return {
        type: 'ADDFILM',
        payload: obj
    };
}



export const listmovie = (obj) => {
   
    return {
        type: 'LISTMOVIE',
        payload: obj
    };
}


export const deletelist = (obj) => {
   
    return {
        type: 'DELETELIST',
        payload: obj
    };
}

export const films = (obj) => {

    return {
        type: 'FILM',
        payload: obj
    };
}

export const filter = (obj) => {
  
     return {
         type: 'FILTER',
         payload: obj
     };
 }

 
 export const deletemovie = (obj) => {
    console.log(obj)
     return {
         type: 'DeleteMovie',
         payload: obj
     };
 }


 export const allFriend =(obj)=>{
    return {
        type: 'ALLFRIEND',
        payload: obj
    };
 }


 export const friend =(obj)=>{
    return {
        type: 'FRIEND',
        payload: obj
    };
 }


 export const deletefriend =(obj)=>{
    return {
        type: 'DELETEFRIEND',
        payload: obj
    };
 }