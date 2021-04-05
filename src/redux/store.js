// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "./phonebook/phonebook-reducers";
import logger from "redux-logger";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "helloRedux",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    phonebook: persistReducer(persistConfig, contactReducer),
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
