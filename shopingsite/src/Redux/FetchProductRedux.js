const INITIAL_STATE = {
    AdminProductData:[],
    ProductData:[],
    ProductData2:[],
    ProductImage:[],
    productfetchSINgle:[],
    activestatus:"",
    error_msg:"",
    AdmintokenId:"",
}
export const Block_Unblock_Product = "Block_Unblock_Product";
export const Admin_Fetch_Product = "Admin_Fetch_Product";
export const SUCCESSFUL_Fetch_Product = "SUCCESSFUL_Fetch_Product";
export const INVALID_DATA_Product = "INVALID_DATA_Product";
export const SUCCESSFUL_Fetch_Product2="SUCCESSFUL_Fetch_Product2"
export const SUCCESSFUL_Fetch_ProductImage="SUCCESSFUL_Fetch_ProductImage"
export const SUCCESSFUL_Fetch_productfetchSINgle="SUCCESSFUL_Fetch_productfetchSINgle"
export const AdminSUCCESSFUL_Loging = "AdminSUCCESSFUL_Loging";
export const AdminLOGOUT = "LOGOUT";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AdminSUCCESSFUL_Loging: {
            return Object.assign({}, state, {AdmintokenId:action.AdmintokenId });
        }        
        case Block_Unblock_Product: {
            return Object.assign({}, state, {activestatus:action.activestatus });
        }
        case Admin_Fetch_Product: {
            return Object.assign({}, state, {AdminProductData:action.AdminProductData });
        }
        case SUCCESSFUL_Fetch_Product: {
            //  
            return Object.assign({}, state, {ProductData:action.ProductData });
        }
        case SUCCESSFUL_Fetch_productfetchSINgle: {
            return Object.assign({}, state, {productfetchSINgle:action.productfetchSINgle });
        }
        case SUCCESSFUL_Fetch_Product2: {
            return Object.assign({}, state, {ProductData2:action.ProductData2 });
        }
        
        case SUCCESSFUL_Fetch_ProductImage: {
            return Object.assign({}, state, {ProductImage:action.ProductImage });
        }
        case INVALID_DATA_Product: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
        case AdminLOGOUT: {
            return Object.assign({}, state, { AdmintokenId: "" });
        }
         default:
            return state
    }
}