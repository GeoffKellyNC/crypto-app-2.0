import React from 'react';
import ReactDOM from 'react-dom/client';
import './master-styles/index.css'

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import theme from './theme/theme';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux-state/reducer'


// Initiating Sentry for error tracking
Sentry.init({
  dsn: "https://fafd99383a0e47cba8b15a2623a0f54d@o1231034.ingest.sentry.io/6378207",
  integrations: [new BrowserTracing()],

  tracesSampleRate: 1.0,
});


// Initiating Redux Dev Tools and store
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


// Rendering App
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


