const INITIAL_STATE = {
    AdmintokenId:"",
    Adminerror_msg:""    
}
export const AdminSUCCESSFUL_Loging = "SUCCESSFUL_Fetch";
export const AdminLoging_Failed = "INVALID_DATA";
export const AdminLOGOUT = "LOGOUT";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AdminSUCCESSFUL_Loging: {
            return Object.assign({}, state, {AdmintokenId:action.AdmintokenId });
        }
        case AdminLoging_Failed: {
            return Object.assign({}, state, { Adminerror_msg: action.data.Adminerror_msg });
        }     
        case AdminLOGOUT: {
            return Object.assign({}, state, { AdmintokenId: "" });
        }
        default:
            return state
    }
}