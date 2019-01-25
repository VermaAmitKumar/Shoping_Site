import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/Index'

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

var enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
//  
const token = localStorage.getItem("tokenId");
const token1 = localStorage.getItem("AdmintokenId");
const INITIAL_STATE = {
  
  FetchProductReducer:{
    AdminProductData:[],
    ProductData:[],
    ProductData2:[],
    ProductImage:[],
    productfetchSINgle:[],
    activestatus:"",
    error_msg:"",
    AdmintokenId:""  
  }

}
if(token){
INITIAL_STATE.FetchProductReducer.tokenId=token
}
if(token1){
  INITIAL_STATE.FetchProductReducer.AdmintokenId=token1
}
export default createStore(rootReducer,INITIAL_STATE, enhancer);
