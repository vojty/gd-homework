import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App';
import configureStore from './redux/configureStore';
import React from 'react';

const store = configureStore();
const rootElement = document.getElementById('root');


render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
