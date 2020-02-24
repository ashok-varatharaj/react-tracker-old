//  DEPENDENCIES
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//  PACKAGES
import Router from './components/Router';
import { store, persistor } from './store';

ReactDOM.render(
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
, document.getElementById('root'));

//  SERVICE WORKER
serviceWorker.register();
