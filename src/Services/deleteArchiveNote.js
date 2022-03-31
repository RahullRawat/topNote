import axios from "axios";

const deleteArchiveNote = async (note, token, notesDispatch) => {
	try {
		const response = await axios.delete(`/api/archives/delete/${note._id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			notesDispatch({ type: "DELETE_ARCHIVE_NOTE", payload: response.data });
		} else {
			throw new Error();
		}
	} catch (error) {
		return error;
	}
};

export { deleteArchiveNote };
