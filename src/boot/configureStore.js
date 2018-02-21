// @flow
import { AsyncStorage } from "react-native";
//import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, reducer)
const logger = createLogger({});

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk, logger)
  );

  const store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);

  return { store, persistor };
}
