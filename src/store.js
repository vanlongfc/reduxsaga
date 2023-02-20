import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
// configue redux-saga
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
});
sagaMiddleware.run(helloSaga);

const action = (type) => store.dispatch({ type });
export { store };
