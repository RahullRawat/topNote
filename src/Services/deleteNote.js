import axios from "axios";

const deleteNote = async (_id, token, notesDispatch) => {
	try {
		const response = await axios.delete(`/api/notes/${_id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
		} else {
			throw new Error();
		}
	} catch (error) {
		alert(error);
	}
};

export { deleteNote };
