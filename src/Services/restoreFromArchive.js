import axios from "axios";

const restoreFromArchive = async (note, token, notesDispatch) => {
	try {
		const response = await axios.post(
			`/api/archives/restore/${note._id}`,
			{},
			{ headers: { authorization: token } }
		);

		if (response.status === 200) {
			notesDispatch({ type: "RESTORE_ARCHIVE_NOTE", payload: response.data });
		} else {
			throw new Error();
		}
	} catch (error) {
		return error;
	}
};

export { restoreFromArchive };
