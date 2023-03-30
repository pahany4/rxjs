import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {auth} from "./auth";

const rootReducer = combineReducers({
  auth,
});

const initStore = () =>
  configureStore({
    reducer: rootReducer,
    /** Отключение redux devtools в production */
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const wrapper = createWrapper(initStore);
