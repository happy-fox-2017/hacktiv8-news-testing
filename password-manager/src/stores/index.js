import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

export default createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(promise(), thunk))
