import axios from "axios";

const addToArchive = async (note, token, notesDispatch) => {
	try {
		const response = await axios.post(
			`/api/notes/archives/${note._id}`,
			{ note },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			notesDispatch({ type: "ARCHIVE_NOTE", payload: response.data });
		} else {
			throw new Error();
		}
	} catch (error) {
		alert(error);
	}
};

export { addToArchive };
