const Friends = (state = ['potatoChips','marc'], action) => {
    switch (action.type) {
        case 'FRIEND': 
                
             return [...state, action.payload];
             case 'DELETEFRIEND': 
                
             return state.filter(p=> p !== action.payload)
        
        default:
            return state;
    }
    
}

export default Friends;
