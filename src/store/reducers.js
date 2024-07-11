import {
    ADD_TO_CART, REMOVE_TO_CART, GET_PRODUCTS_LIST,
    GET_CATEGORIES,
} from "../helpers/constants";

const initialState = {
    items: [],
    totalProducts: 0,
    products: [],
    categories: [],
};

const carritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
                totalProducts: state.totalProducts + 1,
            };
        case REMOVE_TO_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                totalProducts: state.totalProducts - 1,
            };

        case GET_CATEGORIES:
            return {
                ...state,
                categories: [state.categories, action.payload],
            };

        default:
            return state;
    }
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state,
                products: [state.products, action.payload],
            };

        default:
            return state;
    }
};




export default carritoReducer;