const INITIAL_STATE = {
    product:[],
    error_msg:""    
}
export const SUCCESSFUL_Added = "SUCCESSFUL_Fetch";
export const INVALID_DATA1 = "INVALID_DATA";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESSFUL_Added: {
            return Object.assign({}, state, {product:action.product });
        }
        case INVALID_DATA1: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }     
        default:
            return state
    }
}