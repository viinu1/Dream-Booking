import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as httpRequests from '../api/httpRequests';
import { useNavigate } from 'react-router-dom';

const initialState = {
    user: null,
    isAuthenticated: false,
};

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
    try {
        const request = await httpRequests.post('TaiKhoan/DangNhap', user);
        localStorage.setItem('token', JSON.stringify(request.token));
        if (request) {
            window.location.href = '/'
        }
        return request;
    } catch (error) {
        console.log('đăng nhập thất bại');
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = !!action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
            });
    },
});

export default userSlice.reducer;
