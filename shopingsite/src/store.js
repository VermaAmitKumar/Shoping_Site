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
// debugger
const token = localStorage.getItem("tokenId");
const token1 = localStorage.getItem("AdmintokenId");
const INITIAL_STATE = {
  LogingReducer:{
    tokenId:"",
    error_msg:""   
  } ,
  AdminReducer:{
    AdmintokenId:"",
    Adminerror_msg:"" 
  }

}
if(token){
INITIAL_STATE.LogingReducer.tokenId=token
}
if(token1){
  INITIAL_STATE.AdminReducer.AdmintokenId=token1
}
export default createStore(rootReducer,INITIAL_STATE, enhancer);
