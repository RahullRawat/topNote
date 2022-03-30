import React, { useState } from "react";
import "./NoteInput.css";
import { ChromePicker } from "react-color";
import { useNotes } from "../../context/NotesContext";
import { useAuth } from "../../context/AuthContext";
import { addNote } from "../../Services/addNote";
import { deleteNote } from "../../Services/deleteNote";
import { NotesDisplay } from "../NotesDisplay/NotesDisplay";

const NoteInput = () => {
	const { notesState, notesDispatch } = useNotes();
	const { title, content, notes, tags } = notesState;

	const { authState } = useAuth();
	const { token } = authState;

	const [bgColor, setBgColor] = useState("#67d7cc");
	const [showColorPicker, setShowColorPicker] = useState(false);

	const addNoteHandler = (e) => {
		e.preventDefault();
		setShowColorPicker(!showColorPicker);

		if (title.trim().length > 0 || content.trim().length > 0) {
			const newNotesText = {
				title: title,
				content: content,
				bgColor: bgColor,
				tags: tags,
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
					style={{ backgroundColor: `${bgColor}` }}
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
					style={{ backgroundColor: `${bgColor}` }}
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
				<div
					className="note-footer sm-text"
					style={{ backgroundColor: `${bgColor}` }}
				>
					<div className="note-footer-icons">
						<i
							className="fa-solid fa-palette"
							onClick={() => setShowColorPicker(!showColorPicker)}
						></i>
						<i className="fa-solid fa-box-archive"></i>
						<input
							type="text"
							placeholder="Tag"
							className="tag"
							value={tags}
							onChange={(e) =>
								notesDispatch({ type: "NOTES_TAG", payload: e.target.value })
							}
						/>
					</div>
					<i className="fa-solid fa-plus" onClick={addNoteHandler}></i>
				</div>
				{showColorPicker && (
					<div>
						<ChromePicker
							width={400}
							height={100}
							bgColor={bgColor}
							onChange={(updatedColor) => setBgColor(updatedColor.hex)}
						/>
					</div>
				)}
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
