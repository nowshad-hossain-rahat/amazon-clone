const initialState = {
    basket: [],
    currentUser: null
};

export default initialState;

export const reducer = (state, action) => {

    switch(action.type){

        case 'ADD_TO_BASKET':

            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            
            let basket = [...state.basket];
            
            const index = basket.findIndex(
                (item) => item.id === action.item.id
            );
            
            if(index >= 0)
                basket.splice(index, 1);
        
            return {
                ...state,
                basket
            };
        
        case 'SET_CURRENT_USER':

            return {
                ...state,
                currentUser: action.currentUser
            };
        
        default:

            return state;

    }

};