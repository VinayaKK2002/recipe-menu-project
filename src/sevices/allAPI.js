import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

//registerAPI called by auth component when click on register  button
export const registerAPI=async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}
//loginAPI api called by auth component when click on login  button
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

//add menu api
export const addMenuAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-menu`,reqBody,reqHeader)
}

//get menu api
export const getMenuAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/getAll-menu`,{})
}

//workoutplan/:id/remove
export const removeMenuAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/menu/${id}/remove`,{},reqHeader)
}

//update menu API api called by edit component 
export const updateMenuAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/menu/${id}/edit`,reqBody,reqHeader)
}