
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducers';

//import { configureStore } from '@reduxjs/toolkit';


const  reducer =  combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
const initialState = {};
const middleWare = [thunk];


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);




export default store;