export const addfilm = (obj) => {
    console.log(obj)
    return {
        type: 'ADDFILM',
        payload: obj
    };
}