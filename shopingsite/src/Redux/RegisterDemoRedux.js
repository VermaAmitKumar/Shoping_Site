const INITIAL_STATE = {
    totalRegisterData:"",
    SelectCountry:[],
    Selectstate:[],
    Selectcity:[],
    ShowRegisterData:[],
    FetchSingleRegisterData:[],
    deleteDataid:"",
    RegisterSuccessFullyResponse:[] ,
    updateresult:[],
    error_msg:"",    
}
export const TotalRegisterData = "TotalRegisterData";
export const updateSuccessfullyData = "updateSuccessfullyData";
export const Fetchsingleregisterdata = "Fetchsingleregisterdata";
export const deletedataid = "deletedataid";
export const Select_Country = "Select_Country";
export const Select_State = "Select_State";
export const Select_City = "Select_City";
export const Registersuccessfullyresponse = "Registersuccessfullyresponse";
export const Showregisterdata1 = "Showregisterdata1";

export const No_Data = "No_Data";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TotalRegisterData: {
            return Object.assign({}, state, {totalRegisterData:action.totalRegisterData });
        }
        case updateSuccessfullyData: {
            var newState= state.ShowRegisterData.map(item => {                
                return item.Register_Id === parseInt(action.updateresult.Register_Id) ? action.updateresult : item;
             })             
            return Object.assign({}, state, {
                updateresult:action.updateresult ,
                ShowRegisterData:newState
            });
        }
        case Fetchsingleregisterdata: {
            return Object.assign({}, state, {FetchSingleRegisterData:action.FetchSingleRegisterData });
        }       
        case Showregisterdata1: {
            return Object.assign({}, state, {ShowRegisterData:action.ShowRegisterData });
        }
        case deletedataid: {     
            console.log(action.deleteDataid);
            const newState1 = state.ShowRegisterData.filter((val) => val.Register_Id !== parseInt(action.deleteDataid) );
            console.log(newState1);
            return Object.assign({}, state, {
                deleteDataid:action.deleteDataid,
                ShowRegisterData:newState1
             });
        }
        case Registersuccessfullyresponse: {            
            return Object.assign({}, state, {
                RegisterSuccessFullyResponse:action.RegisterSuccessFullyResponse,
                ShowRegisterData:state.ShowRegisterData.concat(action.RegisterSuccessFullyResponse)
            });
        }
        case Select_Country: {
            return Object.assign({}, state, {SelectCountry:action.SelectCountry });
        }
        case Select_State: {
            return Object.assign({}, state, {Selectstate:action.Selectstate });
        }
        case Select_City: {
            return Object.assign({}, state, {Selectcity:action.Selectcity });
        }
        case No_Data: {
            //  
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }     
        default:
            return state
    }
}