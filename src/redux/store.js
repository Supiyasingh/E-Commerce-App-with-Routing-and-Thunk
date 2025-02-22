import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk"; 
import cartReducer from "./reducers/cartReducer.js";  
import {productReducer} from "./reducers/productReducer.js";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
