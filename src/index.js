import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/app.scss";
import 'antd/dist/antd.css';

import waterMarkerReducer from './redux/reducers/waterMarkerReducer';
import { combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux'
const reducer = combineReducers({ waterMarkerReducer })
const store = createStore(reducer)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
