import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import authReducer from './reducers/authReducer'
import navReducer from "./reducers/navReducer"
import errorReducer from "./reducers/errorReducer"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    authReducer: authReducer,
    navReducer: navReducer,
    errorReducer: errorReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 

export default store;