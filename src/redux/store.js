import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import waterMarkerReducer from './reducers/waterMarkerReducer';
import logger from 'redux-logger'
const store = createStore(waterMarkerReducer, composeWithDevTools(applyMiddleware(logger)))
export default store