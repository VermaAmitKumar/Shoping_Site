import {combineReducers} from 'redux'
//import all redcer
import category from './SelectCategory'
import SelectSubcategoryReducer from './SelectSubcategory'
import ProductReducer from './ProductRedux'
import RegisterReducer from './RegisterRedux'
import LogingReducer from './LoginAuthRedux'
// import AdminReducer from './AdminLogingRedux'
import FetchProductReducer from './FetchProductRedux'
import RegisterDemoRedux from './RegisterDemoRedux'
export default combineReducers({category,SelectSubcategoryReducer,ProductReducer,RegisterReducer,LogingReducer,FetchProductReducer,RegisterDemoRedux});