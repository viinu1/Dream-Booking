import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserSlice from './UserSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    user: UserSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);

export default store;
