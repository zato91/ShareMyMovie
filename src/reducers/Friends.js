const Friends = (state = ['potatoChips','marc'], action) => {
    switch (action.type) {
        case 'FRIEND': 
                
             return [...state, action.payload]
        
        
        default:
            return state;
    }
    
}

export default Friends;
