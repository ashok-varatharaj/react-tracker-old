// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import themeModeReducer from './themeModeReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    authReducer,
	counterReducer,
	themeModeReducer
});
// Exports
export default rootReducer;