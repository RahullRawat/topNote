import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducer/NotesReducer";

const NotesContext = createContext(null);

const initialValue = {
	tags: "",
	notes: [],
	archiveNotes: [],
	trash: [],
};

const NotesProvider = ({ children }) => {
	const [notesState, notesDispatch] = useReducer(notesReducer, initialValue);
	return (
		<NotesContext.Provider value={{ notesState, notesDispatch }}>
			{children}
		</NotesContext.Provider>
	);
};

const useNotes = () => useContext(NotesContext);

export { useNotes, NotesProvider };
