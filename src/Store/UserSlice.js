import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  * as httpRequests from '../api/httpRequests'

const initialState = {
    isLogin:false,
    loading:false,
    user:[],
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(user)=>{
        const request =await httpRequests.post('TaiKhoan/DangNhap',user)
        localStorage.setItem('user',JSON.stringify(request.token))
        return request; 
    }
);


const userSlice =  createSlice({
    name: "user",
    initialState,
    extraReducers:(builder) =>{
        builder
        .addCase(loginUser.pending,state=>{
            state.loading = true;
            state.user = null
            state.isLogin=false
            
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload
            state.isLogin=true
            
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.user = null
            
        })
    }
})

export default userSlice.reducer;