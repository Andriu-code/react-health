import { GET_PRODUCTS_LIST } from "../../helpers/constants";

const initialState = {
    products: [],
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




export default productReducer;