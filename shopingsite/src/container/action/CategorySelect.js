//import Service
import * as authService from '../Service/SelectCategory'

//import reducer
import { INVALID_DATA,SUCCESSFUL_Fetch } from '../../Redux/SelectCategory';
import { INVALIDSelectSubCategory_DATA,SUCCESSFULSelectSubCategory_Fetch } from '../../Redux/SelectSubcategory';
import { SUCCESSFUL_Added,INVALID_DATA1 } from '../../Redux/ProductRedux';
import { SUCCESSFULLYADDED,INVALID_DATAError } from '../../Redux/RegisterRedux';
import { SUCCESSFUL_Loging,Loging_Failed,LOGOUT } from '../../Redux/LoginAuthRedux';
import { AdminSUCCESSFUL_Loging,AdminLoging_Failed,AdminLOGOUT } from '../../Redux/AdminLogingRedux';
import { SUCCESSFUL_Fetch_Product,INVALID_DATA_Product, SUCCESSFUL_Fetch_Product2 } from '../../Redux/FetchProductRedux';

export const FetchProductAction2 = (id,id2) => {
    return (dispatch) => {
        authService.FetchProductforCatAndSubcatService(id,id2).then((response) => {
            if (response.status === 200) {
                // debugger;
                dispatch(
                    {
                        type: SUCCESSFUL_Fetch_Product2,
                        ProductData2: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: INVALID_DATA_Product, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const FetchProductAction = () => {
    return (dispatch) => {
        authService.FetchProductService().then((response) => {
            if (response.status === 200) {
                // debugger;
                dispatch(
                    {
                        type: SUCCESSFUL_Fetch_Product,
                        ProductData: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: INVALID_DATA_Product, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const Adminlogoutuser = (credentails) => {
    return (dispatch) => {
        dispatch(
            {
                type: AdminLOGOUT
            })
        localStorage.removeItem("AdmintokenId")
    }
};
export const AdminLogingAction = (data) => {    
    return (dispatch) => {
     // importservice.servicefunctionname
        authService.AdminLogingService(data).then((response) => {
            if (response.status === 200) {      
                // debugger
                   localStorage.setItem("AdmintokenId",response.data.Register_Id);
                dispatch(
                    {   //reducerVeriablename
                        type:AdminSUCCESSFUL_Loging,
                        AdmintokenId: response.data.Register_Id                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type:  AdminLoging_Failed, data: { Adminerror_msg: error.response.data.error } });
                }
            })
    }
};
export const logoutuser = (credentails) => {
    return (dispatch) => {
        // debugger
        dispatch(
            {
                type: LOGOUT
            })
        localStorage.removeItem("tokenId")
    }
};
export const LogingAction = (data) => {    
    return (dispatch) => {
     // importservice.servicefunctionname
        authService.LogingService(data).then((response) => {
            if (response.status === 200) {      
                   localStorage.setItem("tokenId",response.data.Register_Id);
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
                // debugger   
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