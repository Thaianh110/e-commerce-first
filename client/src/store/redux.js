import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app/appSlice';
import storage from 'redux-persist/lib/storage'
import productSlice from './product/productSlice';
import userSlice from './user/userSlice';
import {PAUSE, PERSIST, persistReducer,persistStore,FLUSH, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
const commonConfig = {
  key: 'shop/user',
  storage
}
const userConfig = {
  ...commonConfig,
  whitelist: ['isLoggedIn','token','current' ,'currentCart']
}

export const store = configureStore({
  reducer: {
    app: appSlice,
    products: productSlice,
    user: persistReducer(userConfig, userSlice)
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      },
    })
});

export const persistor = persistStore(store)