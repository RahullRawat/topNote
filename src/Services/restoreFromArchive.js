import axios from "axios";
import { toast } from "react-toastify";

const restoreFromArchive = async (note, token, notesDispatch) => {
	try {
		const response = await axios.post(
			`/api/archives/restore/${note._id}`,
			{},
			{ headers: { authorization: token } }
		);

		if (response.status === 200) {
			notesDispatch({ type: "RESTORE_ARCHIVE_NOTE", payload: response.data });
			toast.success("Note restored from archive");
		} else {
			throw new Error("Something went wrong !!");
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
	}
};

export { restoreFromArchive };
