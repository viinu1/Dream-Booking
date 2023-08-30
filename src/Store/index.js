import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserSlice from './UserSlice';
import permissionsReducer from './permissionsSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user', 'isAuthenticated'],
};

const reducer = combineReducers({
    user: UserSlice,
    permissions:permissionsReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);

export default store;
