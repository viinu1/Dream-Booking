import axios from 'axios';

const httpRequest = axios.create({
    baseURL: "https://localhost:44319/api/",
    withCredentials: false,
    headers: { 
        'content-type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
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


export default httpRequest;
