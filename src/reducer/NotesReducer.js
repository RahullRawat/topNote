const notesReducer = (state, action) => {
	switch (action.type) {
		case "NOTES_TITLE":
			return {
				...state,
				title: action.payload,
			};

		case "NOTES_CONTENT":
			return {
				...state,
				content: action.payload,
			};

		case "ADD_NOTE":
			return {
				...state,
				notes: action.payload,
			};

		case "RESET_FORM":
			return {
				...state,
				title: "",
				content: "",
			};

		default:
			return {
				state,
			};
	}
};

export { notesReducer };
