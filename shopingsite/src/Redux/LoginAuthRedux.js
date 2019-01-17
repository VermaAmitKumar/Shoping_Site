const INITIAL_STATE = {
    tokenId:"",
    error_msg:""    
}
export const SUCCESSFUL_Loging = "SUCCESSFUL_Fetch";
export const Loging_Failed = "INVALID_DATA";
export const LOGOUT = "LOGOUT";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESSFUL_Loging: {
            return Object.assign({}, state, {tokenId:action.tokenId });
        }
        case Loging_Failed: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }     
        case LOGOUT: {
            return Object.assign({}, state, { token: "" });
        }
        default:
            return state
    }
}