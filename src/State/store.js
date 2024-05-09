import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer.js";
import { customerProductReducer } from "./Product/Reducer.js";
import { cartReducer } from "./Cart/Reducer.js";
import { orderReducer } from "./Order/Reducer.js";
import adminOrderReducer from "./Admin/Order/Reducer.js";

const rootReducers=combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    adminOrder:adminOrderReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))