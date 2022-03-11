const initialState = {
    basket: []
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
            
            let basket = state.basket;
            basket.splice(basket.indexOf(action.item), 1);
        
            return {
                ...state,
                basket
            };

        default:

            return state;

    }

};