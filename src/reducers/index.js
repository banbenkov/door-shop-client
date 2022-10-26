import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import doorDetailReducer from "./doorDetailReducer";
import doorReducer from "./doorReducer";
import doorImageReducer from "./doorImageReducer";
import modalReducer from "./modalReducer";
import alertReduser from "./alertReduser";
import priceFilterReducer from "./priceFilterReducer";


const rootReducer = combineReducers({
    door: doorReducer,
    doorDetail: doorDetailReducer,
    doorImg: doorImageReducer,
    modal: modalReducer,
    alert: alertReduser,
    priceFilter: priceFilterReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))