import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
//importing rootReducer from store
import rootReducer from './store'
//importing Provider & createStore
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const stores = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

