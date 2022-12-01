import { useDispatch, useSelector as useReduxSelector } from "react-redux";

import { persistReducer, persistStore } from "redux-persist";
import * as rp from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, persistConfig } from "./slices";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          rp.FLUSH,
          rp.REHYDRATE,
          rp.PAUSE,
          rp.PERSIST,
          rp.PURGE,
          rp.REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();
export const useSelector = useReduxSelector;
export default store;
