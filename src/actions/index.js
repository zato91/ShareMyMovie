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
   console.log(obj)
    return {
        type: 'FILM',
        payload: obj
    };
}

export const filter = (obj) => {
    console.log(obj)
     return {
         type: 'FILTER',
         payload: obj
     };
 }