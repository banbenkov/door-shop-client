import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import doorDetailReducer from "./doorDetailReducer";
import doorReducer from "./doorReducer";
import doorImageReducer from "./doorImageReducer";
import modalReducer from "./modalReducer";
import alertReduser from "./alertReduser";
import priceFilterReducer from "./priceFilterReducer";
import viewFilterReducer from "./viewFilterReducer";
import furnitureReducer from "./furnitureReducer";
import furnitureDetailReducer from "./furnitureDetailReducer";
import portfolioReducer from "./portfolioReducer";


const rootReducer = combineReducers({
    door: doorReducer,
    doorDetail: doorDetailReducer,
    doorImg: doorImageReducer,
    modal: modalReducer,
    alert: alertReduser,
    priceFilter: priceFilterReducer,
    viewFilter: viewFilterReducer,
    furniture: furnitureReducer,
    furnitureDetail: furnitureDetailReducer,
    portfolio: portfolioReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))