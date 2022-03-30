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

		case "NOTES_TAG":
			return {
				...state,
				tags: action.payload,
			};

		case "ADD_NOTE":
			return {
				...state,
				notes: action.payload,
			};

		case "EDIT_NOTE":
			return {
				...state,
				title: action.payload.title,
				content: action.payload.content,
			};

		case "RESET_FORM":
			return {
				...state,
				title: "",
				content: "",
				tags: "",
			};

		default:
			return {
				state,
			};
	}
};

export { notesReducer };
