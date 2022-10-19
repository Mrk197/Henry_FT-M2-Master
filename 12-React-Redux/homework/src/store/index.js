import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //para uso de devtool
    applyMiddleware(thunk), //para llamadas asyncronas 
);

export default store;

//const composeEhancers = (typeof window !== )