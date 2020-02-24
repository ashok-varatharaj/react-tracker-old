//  DEPENDENCIES
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

//  REDUCER
import rootReducer from './reducers';

// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    storage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
      'authReducer',
      'themeModeReducer',
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
      'counterReducer',
    ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//  MIDDLEWARE
const middleware = [thunk];

// Redux: Store
const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(
			//	createLogger(),
			...middleware
		),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    //  DEVTOOLS
    )
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);
    
export {store,persistor};