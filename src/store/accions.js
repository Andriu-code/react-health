import {
    ADD_TO_CART, REMOVE_TO_CART, GET_PRODUCTS_LIST,
    GET_CATEGORIES
} from "../helpers/constants";

export const addToCart = (producto) => {
    console.log('Dispatching addToCart with product:', producto);
    return {
        type: ADD_TO_CART,
        payload: producto,
    }
};

export const removeToCart = (producto) => {
    console.log('Dispatching removeToCart with product:', producto);
    return {
        type: REMOVE_TO_CART,
        payload: producto,
    }
};


export const getCategories = (categories) => {
    console.log('categories list', categories);
    return {
        type: GET_CATEGORIES,
        payload: categories,
    }
}