import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    //para uso de devtool  widow..... y se usa compose para pasare más de 2 parámetros
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    //applyMiddleware(thunk), //para llamadas asyncronas 
);

export default store;

//const composeEhancers = (typeof window !== )