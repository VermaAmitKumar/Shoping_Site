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
// const token = localStorage.getItem("TOKEN");
// const INITIAL_STATE = {
//   Auth: {
//     token: "",
//     error_msg: ""
//   }

// }
// if(token)
//   INITIAL_STATE.Auth.token=token;
// export default createStore(rootReducer,INITIAL_STATE, enhancer);

export default createStore(rootReducer, enhancer);