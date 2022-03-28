const authReducer = (state, action) => {
	switch (action.type) {
		case "LOG_IN_EMAIL":
			return {
				...state,
				email: action.payload,
			};

		case "LOG_IN_PASSWORD":
			return {
				...state,
				password: action.payload,
			};

		case "LOG_IN":
			return {
				...state,
				userData: action.payload.userData,
				token: action.payload.token,
			};

		case "ERROR":
			return {
				...state,
				error: !state.error,
			};

		case "NAME":
			return {
				...state,
				firstName: action.payload,
			};

		case "SIGN_UP":
			return {
				...state,
				userData: action.payload.userData,
				token: action.payload.token,
			};

		case "SIGN_UP_EMAIL":
			return {
				...state,
				email: action.payload,
			};

		case "SIGN_UP_PASSWORD":
			return {
				...state,
				password: action.payload,
			};

		case "LOGOUT":
			return {
				...state,
				userData: null,
				token: null,
			};

		case "LOAD_USER_DATA":
			return {
				...state,
				userData: action.payload.loadUser,
				token: action.payload.loadToken,
			};

		default:
			return {
				...state,
			};
	}
};

export { authReducer };
