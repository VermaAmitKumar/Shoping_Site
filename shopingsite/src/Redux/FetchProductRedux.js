const INITIAL_STATE = {
    ProductData:[],
    ProductData2:[],
    error_msg:""
}
export const SUCCESSFUL_Fetch_Product = "SUCCESSFUL_Fetch";
export const INVALID_DATA_Product = "INVALID_DATA";
export const SUCCESSFUL_Fetch_Product2="SUCCESSFUL_Fetch_Product2"

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESSFUL_Fetch_Product: {
            return Object.assign({}, state, {ProductData:action.ProductData });
        }
        case SUCCESSFUL_Fetch_Product2: {
            return Object.assign({}, state, {ProductData2:action.ProductData2 });
        }
        case INVALID_DATA_Product: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }     
         default:
            return state
    }
}