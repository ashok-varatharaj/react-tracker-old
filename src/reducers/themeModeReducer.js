// Initial State
const initialState = {
	theme:"light"
};

// Reducers (Modifies The State And Returns A New State)
const themeModeReducer = (state = initialState, action) => {
    switch (action.type) {
		case 'SWITCH_THEME': {
            let nextTheme = (state.theme === "light")?"dark":"light";
			return {
				...state,
				theme: nextTheme
			}
		}
		// Default
		default: {
			return state;
		}
    }
};

// Exports
export default themeModeReducer;