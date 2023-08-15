import axios from 'axios';

const httpRequest = axios.create({
    baseURL: "http://localhost:3001/",
    mode:'no-cors',
    headers: {
        'content-type': 'application/json',
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
