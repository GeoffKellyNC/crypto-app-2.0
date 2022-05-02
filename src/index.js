import React from 'react';
import ReactDOM from 'react-dom/client';
import './master-styles/index.css'
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import theme from './theme/theme';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux-state/reducer'



const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>,
  </React.StrictMode>
);


