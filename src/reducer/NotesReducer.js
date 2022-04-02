const notesReducer = (state, action) => {
	switch (action.type) {
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
				tags: action.payload.tags,
			};

		case "RESET_FORM":
			return {
				...state,
				tags: "",
			};

		case "ARCHIVE_NOTE":
			return {
				...state,
				notes: action.payload.notes,
				archiveNotes: action.payload.archives,
			};

		case "RESTORE_ARCHIVE_NOTE":
			return {
				...state,
				notes: action.payload.notes,
				archiveNotes: action.payload.archives,
			};
		case "DELETE_ARCHIVE_NOTE":
			return {
				...state,
				archiveNotes: action.payload.archives,
			};

		case "MOVE_TO_TRASH":
			return {
				...state,
				trash: [...state.trash, action.payload],
			};

		case "DELETE_NOTE_FROM_TRASH":
			return {
				...state,
				trash: state.trash.filter((note) => note._id !== action.payload._id),
			};

		default:
			return {
				state,
			};
	}
};

export { notesReducer };
