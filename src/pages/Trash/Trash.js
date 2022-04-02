import React from "react";
import parse from "html-react-parser";
import { Sidebar } from "../../components";
import { useNotes } from "../../context/NotesContext";
import { useAuth } from "../../context/AuthContext";
import { addNote } from "../../Services/addNote";

const Trash = () => {
	const { notesState, notesDispatch } = useNotes();
	const { trash } = notesState;
	const { authState } = useAuth();
	const { token } = authState;

	const restoreFromTrash = (note) => {
		addNote(note, token, notesDispatch);
		notesDispatch({ type: "DELETE_NOTE_FROM_TRASH", payload: note });
	};

	const deleteNotesFromTrashHandler = (note) => {
		notesDispatch({ type: "DELETE_NOTE_FROM_TRASH", payload: note });
	};

	return (
		<>
			<div className="homepage-container">
				<Sidebar />
				<div className="note-container">
					{trash.length === 0 ? (
						<p className="no-notes lg-text  mt-4">No Trash Notes</p>
					) : (
						trash.map((note) => {
							return (
								<div className="new-notes-container" key={note._id}>
									<h1
										className="note-title"
										style={{ backgroundColor: `${note.bgColor}` }}
									>
										{parse(note.title)}
									</h1>
									<h4
										className="note-content new-note"
										style={{ backgroundColor: `${note.bgColor}` }}
									>
										{parse(note.content)}
									</h4>
									<div
										className="note-footer sm-text"
										style={{ backgroundColor: `${note.bgColor}` }}
									>
										<h6>{note.createdTime}</h6>
										<h6 className="tag-bg">{note.tags}</h6>
										<div className="note-footer-icons">
											<i
												class="fa-solid fa-arrow-up"
												onClick={() => restoreFromTrash(note)}
											></i>
											<i
												className="fa-solid fa-trash"
												onClick={() => deleteNotesFromTrashHandler(note)}
											></i>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

export { Trash };
