const INITIAL_STATE = {
    SelectSubcategory:[]
}
export const SUCCESSFULSelectSubCategory_Fetch = "SUCCESSFUL_Fetch";
export const INVALIDSelectSubCategory_DATA = "INVALID_DATA";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESSFULSelectSubCategory_Fetch: {
            return Object.assign({}, state, {SelectSubcategory:action.SelectSubcategory });
        }
        case INVALIDSelectSubCategory_DATA: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }     
         default:
            return state
    }
}