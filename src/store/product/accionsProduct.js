import { GET_PRODUCTS_LIST } from "../../helpers/constants";

export const getProducts = (productos) => {
    console.log('products list', productos);
    return {
        type: GET_PRODUCTS_LIST,
        payload: productos
    }
};