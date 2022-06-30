import { applyMiddleware, createStore } from "redux";
import { mobileReducer } from "./reducers/mobile";
// import {contactsReducer} from './reducers/contacts';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";
import { watchUser } from "./sagas/users.saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import {PersistGate} from 'redux-persist/integration/react';
const persistConfig = {
  key: "root",
  storage,
  varsion: 1,
};
const persistedReducer = persistReducer(persistConfig, mobileReducer);
// const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);
// export const persistor = persistStore(store)
export const persistor = persistStore(store);

sagaMiddleware.run(watchUser);
