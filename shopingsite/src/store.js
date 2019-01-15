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
// debugger;
// const CategoryData = localStorage.getItem("CategoryData");

// // console.log(JSON.stringify( CategoryData,undefined,2));
// const INITIAL_STATE = {
//   category:[]
// }
// if(CategoryData)
// // console.log(CategoryData.toSource());
//   INITIAL_STATE.category=CategoryData;
// export default createStore(rootReducer,INITIAL_STATE, enhancer);

export default createStore(rootReducer, enhancer);