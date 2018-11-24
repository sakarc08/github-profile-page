import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import localforage from "localforage";
// import logger from "redux-logger"
import { configureSagas } from "./sagas";
import reducer from "../reducers";

// const sagaMiddleware = createSagaMiddleware();
// const middleware = applyMiddleware(sagaMiddleware); // ,logger())
// const configureStore = createStore(reducer, middleware);
// export default configureStore;
// sagaMiddleware.run(configureSagas());
const storage = localforage;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const config = {
  key: "root",
  whitelist: ["docType"],
  storage
};

const persistedReducer = persistReducer(config, reducer);
const store = createStore(persistedReducer,middleware);
export default store;

sagaMiddleware.run(configureSagas());


// const configureStore = preloadedState => {
//   const store = createStore(
//     persistReducer(config, reducer),
//     preloadedState,
//     applyMiddleware(sagaMiddleware)
//   );
//   const persistor = persistStore(store);
//   sagaMiddleware.run(configureSagas());
//   return { store, persistor };
// };
// export default configureStore;
