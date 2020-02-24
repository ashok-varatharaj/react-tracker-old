// Initial State
const initialState = {
	loggedIn: false,
	userData:{}
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				loggedIn: action.payload.status
			}
		}
		case 'USERDATA':{
			return {
				...state,
				userData:action.payload.data
			}
		}
		// Default
		default: {
			return state;
		}
    }
};

// Exports
export default authReducer;