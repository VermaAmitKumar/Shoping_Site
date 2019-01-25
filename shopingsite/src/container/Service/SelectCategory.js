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
    //  ;
    return baseService.post("./product/Save",data);
}
export function RegisterSaveService(data){
     ;
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
    return baseService.put("./SubCategry/ActiveDeactive/"+id,data );
}
export function SelectCountryService(){
    return baseService.get("./SELECT/countries");
}
export function SelectStateService(id){
    return baseService.get("./SELECT/state/"+id);
}
export function SelectCityService(id){
    return baseService.get("./SELECT/city/"+id);
}
export function SaveRegisterDataService(data){
    return baseService.post("./Register/Save1",data);
}
export function ShowRegisterDataService(ID,ID2){    
    return baseService.get("./Register/ShowData/"+ID+"/"+ID2);
}
export function DeleteRegisterDataService(id,data){
    return baseService.put("./Register/DeleteRegisterData/"+id,data);
}

export function FetchSingleRegisterDataAction(id){
    return baseService.get("./Register/fetchRegisterSingleData/"+id);
}
export function UpdateRegisterDataService(id,data){
    //  
    return baseService.put("./SubCategry/UpdateData/"+id,data );
}
export function totalcountDataService(){
    //  
    return baseService.get("./datacount");
}