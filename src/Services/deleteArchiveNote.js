import axios from "axios";
import { toast } from "react-toastify";

const deleteArchiveNote = async (note, token, notesDispatch) => {
	try {
		const response = await axios.delete(`/api/archives/delete/${note._id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			notesDispatch({ type: "DELETE_ARCHIVE_NOTE", payload: response.data });
			toast.error("Archived Note deleted permanently");
		} else {
			throw new Error("Something went wrong !!");
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
	}
};

export { deleteArchiveNote };
