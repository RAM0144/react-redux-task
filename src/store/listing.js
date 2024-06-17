const initialState = {
    products: [],
    cart: [],
    
}

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "load_ProdItem":
            return {
                ...state,
                products: action.products,
            };

        case "add_to_cart":
            return {
                ...state,
                cart: [...state.cart, action.product],
             
            };
        case "rest_cart":
            return initialState;
        default:
            return state;
    }

};

export default listingReducer;