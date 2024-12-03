import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "../src/api/apiSlice";

import authReducer from "../src/features/Auth/slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});
const persistedAuthReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedAuthReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ],
      },
    }).concat(api.middleware),
});
export const persistor = persistStore(store);

export default store;
