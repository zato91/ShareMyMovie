const Users = (state = [], action) => {
    switch (action.type) {
        case 'ALLFRIEND': 
                
             return state.concat(action.payload);
        
        
        default:
            return state;
    }
    
}

export default Users;
