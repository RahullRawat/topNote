import React from "react";
import "./NoteInput.css";
import { useNotes } from "../../context/NotesContext";
import { useAuth } from "../../context/AuthContext";
import { addNote } from "../../Services/addNote";
import { deleteNote } from "../../Services/deleteNote";
import { NotesDisplay } from "../NotesDisplay/NotesDisplay";

const NoteInput = () => {
	const { notesState, notesDispatch } = useNotes();
	const { title, content, notes } = notesState;

	const { authState } = useAuth();
	const { token } = authState;

	const addNoteHandler = (e) => {
		e.preventDefault();

		if (title.trim().length > 0 || content.trim().length > 0) {
			const newNotesText = {
				title: title,
				content: content,
				createdTime: new Date().toLocaleString(),
			};
			addNote(newNotesText, token, notesDispatch);
			notesDispatch({ type: "RESET_FORM" });
		} else {
			alert("Notes can't be blank");
		}
	};

	const deleteNotesHandler = (_id) => {
		deleteNote(_id, token, notesDispatch);
	};

	return (
		<section className="note-container">
			<form>
				<input
					type="text"
					name="title"
					className="note-title"
					placeholder="Title"
					value={title}
					onChange={(e) =>
						notesDispatch({ type: "NOTES_TITLE", payload: e.target.value })
					}
				/>
				<textarea
					name="content"
					cols="30"
					rows="10"
					placeholder="Type your note..."
					className="note-content"
					value={content}
					onChange={(e) =>
						notesDispatch({ type: "NOTES_CONTENT", payload: e.target.value })
					}
				></textarea>
				<div className="note-footer sm-text">
					<div className="note-footer-icons">
						<i className="fa-solid fa-palette"></i>
						<i className="fa-solid fa-box-archive"></i>
					</div>
					<i className="fa-solid fa-plus" onClick={addNoteHandler}></i>
				</div>
			</form>
			<NotesDisplay
				notes={notes}
				notesDispatch={notesDispatch}
				deleteNotesHandler={deleteNotesHandler}
				deleteNote={deleteNote}
				token={token}
			/>
		</section>
	);
};

export { NoteInput };
