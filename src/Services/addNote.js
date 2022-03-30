import axios from "axios";

const addNote = async (newNotesText, token, notesDispatch) => {
	try {
		const response = await axios.post(
			"/api/notes",
			{ note: newNotesText },
			{ headers: { authorization: token } }
		);
		console.log(response.data);
		if (response.status === 201) {
			notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
		} else {
			throw new Error();
		}
	} catch (error) {
		alert(error);
	}
};

export { addNote };
