//import Service
import baseService from './BaseService';
export function FetchCategory(){
    // debugger;
    return baseService.get('./Categry/Show');
}
export function SelectSubcategory(id){
    //  debugger;
        // importVeriableservicename       
    return baseService.get("./SubCategry/SelectBaseOnId/"+id);
}
export function ProductSaveService(data){
    // debugger;
    return baseService.post("./product/Save",data);
}
export function RegisterSaveService(data){
    debugger;
    return baseService.post("./Register/Save",data);
}
export function LogingService(data){
    debugger;
    return baseService.post("./Register/Loging",data);
}