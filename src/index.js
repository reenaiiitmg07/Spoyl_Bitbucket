import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';

import style from './index.css'

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';

import reducers from './reducer/index';

import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(reducers);



ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>

  , document.getElementById('root'));
registerServiceWorker();