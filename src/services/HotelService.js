import * as httpRequest from '../api/httpRequests';

export const getHotel = async () => {
    try {
        const res = await httpRequest.get('hotels',{});
        return res.data;
    } catch (error) {
        console.log(error);
    }
};