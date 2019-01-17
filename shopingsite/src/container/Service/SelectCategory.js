//import Service
import baseService from './BaseService';
export function FetchCategory(){
    return baseService.get('./Categry/Show');
}
export function SelectSubcategory(id){
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
    return baseService.post("./Register/Loging",data);
}
export function AdminLogingService(data){
    return baseService.post("./Admin/Loging",data);
}

export function FetchProductService(){
    return baseService.get("./product/Show");
}
export function FetchProductforCatAndSubcatService(id,id2){
    return baseService.get("./product/ShowwithCatAndSubcat/"+ id + '/'+id2);
}