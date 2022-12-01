import { userSlice } from "./user";
import storage from "redux-persist/lib/storage";
export const rootReducer = {
  user: userSlice.reducer,
};
export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export const userActions = userSlice.actions;
