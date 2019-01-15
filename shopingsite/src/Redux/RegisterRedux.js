const INITIAL_STATE = {
    RegisterData:[],
    error_msg:""
}
export const SUCCESSFULLYADDED = "SUCCESSFUL_Fetch";
export const INVALID_DATAError = "INVALID_DATA";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESSFULLYADDED: {
            return Object.assign({}, state, {RegisterData:action.RegisterData });
        }
        case INVALID_DATAError: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }     
         default:
            return state
    }
}