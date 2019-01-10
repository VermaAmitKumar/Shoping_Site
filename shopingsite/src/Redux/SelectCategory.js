const INITIAL_STATE = {
    category:{
        Product_id:"",
        product_Name:"",
        Cid:"",
        active:""
    }
}
export const SUCCESSFUL_Fetch = "SUCCESSFUL_Fetch";
export const INVALID_DATA = "INVALID_DATA";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESSFUL_Fetch: {
            return Object.assign({}, state, {category:action.data.token });
        }
        case INVALID_DATA: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
         default:
            return state
    }
}