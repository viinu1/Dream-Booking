import axios from 'axios';


const token = localStorage.getItem('token')
const httpRequest = axios.create({
    baseURL: "https://localhost:44319/api/",
    withCredentials: false,
    headers: { 
        'content-type': 'application/json',
        'Authorization': `Bearer ${token ? token : ""}`,
    },
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await httpRequest.post(path, options);
    return response.data;
};

export const put = async (path,options={})=>{
    const response = await httpRequest.put(path,options);
    return response.data
}

export const deleTe = async (path,options={})=>{
    const response = await httpRequest.delete(path,options);
    return response.data;
}

export default httpRequest;
