//import Service
import * as authService from '../Service/SelectCategory'

//import reducer
import { Select_Country,
    No_Data,
    Select_State,
    Select_City ,
    Registersuccessfullyresponse,
    Showregisterdata1,deletedataid,
    Fetchsingleregisterdata,
    updateSuccessfullyData,
    TotalRegisterData
} from '../../Redux/RegisterDemoRedux';
export const SelectCountryAction = () => {
    return (dispatch) => {
        authService.SelectCountryService().then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: Select_Country,
                        SelectCountry: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const SelectStateAction = (id) => {
    return (dispatch) => {
        authService.SelectStateService(id).then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: Select_State,
                        Selectstate: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const SelectCityAction = (id) => {
    return (dispatch) => {
        authService.SelectCityService(id).then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: Select_City,
                        Selectcity: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const SaveRegisterDataAction = (data) => {
    return (dispatch) => {
        authService.SaveRegisterDataService(data).then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: Registersuccessfullyresponse,
                        RegisterSuccessFullyResponse: response.data                        
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const ShowRegisterDataAction = (ID,ID2) => {
    return (dispatch) => {
        authService.ShowRegisterDataService(ID,ID2).then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: Showregisterdata1,
                        ShowRegisterData: response.data            
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const DeleteRegisterDataAction = (id,data) => {
    return (dispatch) => {
        authService.DeleteRegisterDataService(id,data).then((response) => {
            debugger
            if (response.status === 200) {
                dispatch(
                    {
                        type: deletedataid,
                        deleteDataid: response.data            
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const FetchSingleRegisterDataAction = (id) => {
    return (dispatch) => {
        authService.FetchSingleRegisterDataAction(id).then((response) => {
            if (response.status === 200) {
                dispatch(
                    {
                        type: Fetchsingleregisterdata,
                        FetchSingleRegisterData: response.data            
                    }
                );
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};
export const UpdateRegisterDataAction = (id,data) => {
    return (dispatch) => {
        authService.UpdateRegisterDataService(id,data).then((response) => {
            if (response.status === 200) {
                
                dispatch({
                        type: updateSuccessfullyData,
                        updateresult: response.data[0]                        
                    });
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};

export const FetchCountDataAction = () => {
    return (dispatch) => {
        authService.totalcountDataService().then((response) => {
            if (response.status === 200) {              
                dispatch({
                        type: TotalRegisterData,
                        totalRegisterData: response.data                       
                    });
            }
        })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: No_Data, data: { error_msg: error.response.data.error } });
                }
            })
    }
};