import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    permissions: [],
  };
  
  const permissionsSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers: {
      setPermissions: (state, action) => {
        state.permissions = action.payload;
      },
    },
  });
  
  export const { setPermissions } = permissionsSlice.actions;
  
  export default permissionsSlice.reducer;