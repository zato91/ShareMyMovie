export const addfilm = (obj) => {
    console.log(obj)
    return {
        type: 'ADDFILM',
        payload: obj
    };
}



// export const listmovie = (obj) => {
//     console.log(obj)
//     return {
//         type: 'LISTMOVIE',
//         payload: obj
//     };
// }