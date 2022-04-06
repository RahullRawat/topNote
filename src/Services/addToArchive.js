import axios from "axios";
import { toast } from "react-toastify";

const addToArchive = async (note, token, notesDispatch) => {
	try {
		const response = await axios.post(
			`/api/notes/archives/${note._id}`,
			{ note },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			notesDispatch({ type: "ARCHIVE_NOTE", payload: response.data });
			toast.success("Note Archived");
		} else {
			throw new Error("Something went wrong !!");
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
	}
};

export { addToArchive };
