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

 
 export const deletelist = (obj) => {
    console.log(obj)
     return {
         type: 'DeleteList',
         payload: obj
     };
 }