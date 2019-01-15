//import Service
import * as authService from '../Service/SelectCategory'

//import reducer
import { INVALID_DATA,SUCCESSFUL_Fetch } from '../../Redux/SelectCategory';
import { INVALIDSelectSubCategory_DATA,SUCCESSFULSelectSubCategory_Fetch } from '../../Redux/SelectSubcategory';
import { SUCCESSFUL_Added,INVALID_DATA1 } from '../../Redux/ProductRedux';
import { SUCCESSFULLYADDED,INVALID_DATAError } from '../../Redux/RegisterRedux';
import { SUCCESSFUL_Loging,Loging_Failed } from '../../Redux/LoginAuthRedux';

export const LogingAction = (data) => {    
    return (dispatch) => {
     // importservice.servicefunctionname
        authService.LogingService(data).then((response) => {
            if (response.status === 200) {      
                debugger   
                dispatch(
                    {   //reducerVeriablename
                        type:SUCCESSFUL_Loging,
                        tokenId: response.data.Register_Id                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type:  Loging_Failed, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const RegisterSaveAction = (data) => {    
    return (dispatch) => {
     // importservice.servicefunctionname
        authService.RegisterSaveService(data).then((response) => {
            if (response.status === 200) {      
                debugger   
                dispatch(
                    {
                         //reducerVeriablename
                        type:SUCCESSFULLYADDED,
                        RegisterData: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type:  INVALID_DATAError, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const FetchCategory = () => {
    return (dispatch) => {
        authService.FetchCategory().then((response) => {
            if (response.status === 200) {
                // debugger;
                dispatch(
                    {
                        type: SUCCESSFUL_Fetch,
                        category: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: INVALID_DATA, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const SelectSubcategory = (id) => {
    
    return (dispatch) => {
     // importservice.servicefunctionname
        authService.SelectSubcategory(id).then((response) => {
            if (response.status === 200) {         
                // localStorage.setItem("TOKEN", response.data[0].Token)
                // debugger;
                dispatch(
                    {
                                //reducerVeriablename
                        type:SUCCESSFULSelectSubCategory_Fetch,
                        SelectSubcategory: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type:  INVALIDSelectSubCategory_DATA, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const ProductSaveAction = (data) => {    
    return (dispatch) => {
     // importservice.servicefunctionname
        authService.ProductSaveService(data).then((response) => {
            if (response.status === 200) {      
                debugger   
                dispatch(
                    {
                                //reducerVeriablename
                        type:SUCCESSFUL_Added,
                        product: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type:  INVALID_DATA1, data: { error_msg: error.response.data.error } });
                }
            })
    }
};