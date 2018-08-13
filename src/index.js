import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'theme/globalStyle';
import App from 'App';
import configureStore from 'configureStore';
import registerServiceWorker from 'registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
