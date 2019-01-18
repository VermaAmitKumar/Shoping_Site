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
export function AdminFetchProductService(){
    return baseService.get("./adminproduct/Show");
}
export function FetchProductforCatAndSubcatService(id,id2){
    return baseService.get("./product/ShowwithCatAndSubcat/"+ id + '/'+id2);
}
export function FetchProductImageService(id){
    return baseService.get("./prdouct/FetchImage/"+ id);
}
export function FetchProductSingleService(id){
    return baseService.get("./product/FetchSingleProduct/"+ id);
}

export function BlockUnblockService(id,data){
    debugger
    return baseService.put("./SubCategry/ActiveDeactive/"+id,data );
}