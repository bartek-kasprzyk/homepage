import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./components/Header/Switch/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;