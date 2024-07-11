import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import carritoReducer from "./reducers";
import productReducer from './product/reducerProduct';

const rootReducer = combineReducers({
    cart: carritoReducer,
    product: productReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;