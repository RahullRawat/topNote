import React from "react";
import "./NoteInput.css";
import { useNotes } from "../../context/NotesContext";
import { useAuth } from "../../context/AuthContext";
import { addNote } from "../../Services/addNote";
import { deleteNote } from "../../Services/deleteNote";

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
			{notes.map((note) => {
				return (
					<div className="new-notes-container" key={note._id}>
						<h1 className="note-title">{note.title}</h1>
						<h4 className="note-content new-note">
							{note.content}
						</h4>
						<div className="note-footer sm-text">
							<h6>{new Date().toDateString()}</h6>
							<div className="note-footer-icons">
								<i className="fa-solid fa-palette"></i>
								<i className="fa-solid fa-box-archive"></i>
								<i className="fa-solid fa-pen"></i>
								<i
									className="fa-solid fa-trash"
									onClick={() => deleteNotesHandler(note._id)}
								></i>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export { NoteInput };
