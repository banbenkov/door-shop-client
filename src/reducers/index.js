import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import doorDetailReducer from "./doorDetailReducer";
import doorReducer from "./doorReducer";
import doorImageReducer from "./doorImageReducer";


const rootReducer = combineReducers({
    door: doorReducer,
    doorDetail: doorDetailReducer,
    doorImg: doorImageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))