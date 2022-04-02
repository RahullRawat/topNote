import React, { useState } from "react";
import "./NoteInput.css";
import { ChromePicker } from "react-color";
import { useNotes } from "../../context/NotesContext";
import { useAuth } from "../../context/AuthContext";
import { addNote } from "../../Services/addNote";
import { deleteNote } from "../../Services/deleteNote";
import { NotesDisplay } from "../NotesDisplay/NotesDisplay";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "../QuillModule";

const NoteInput = () => {
	const { notesState, notesDispatch } = useNotes();
	const { notes, tags } = notesState;

	const { authState } = useAuth();
	const { token } = authState;

	const [bgColor, setBgColor] = useState("#67d7cc");
	const [showColorPicker, setShowColorPicker] = useState(false);

	const [noteTitle, setNoteTitle] = useState("");
	const [noteContent, setNoteContent] = useState("");
	const addNoteHandler = (e) => {
		e.preventDefault();

		if (noteTitle.trim().length > 0 || noteContent.trim().length > 0) {
			const newNotesText = {
				title: noteTitle,
				content: noteContent,
				bgColor: bgColor,
				tags: tags,
				createdTime: new Date().toLocaleString(),
			};
			addNote(newNotesText, token, notesDispatch);
			notesDispatch({ type: "RESET_FORM" });
			setNoteTitle("");
			setNoteContent("");
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
				<ReactQuill
					style={{ backgroundColor: `${bgColor}` }}
					modules={modules}
					formats={formats}
					value={noteTitle}
					className="quill-note-title"
					onChange={(e) => setNoteTitle(e)}
					placeholder="Your title..."
				/>
				<ReactQuill
					style={{ backgroundColor: `${bgColor}` }}
					modules={modules}
					formats={formats}
					value={noteContent}
					onChange={(e) => setNoteContent(e)}
					placeholder="Take a note..."
					className="quill-note-content"
				/>

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
						<select
							value={tags}
							className="tag"
							onChange={(e) =>
								notesDispatch({ type: "NOTES_TAG", payload: e.target.value })
							}
						>
							<option>Tags</option>
							<option value="meeting">Meeting</option>
							<option value="shopping">Shopping</option>
							<option value="grocery">Grocery</option>
							<option value="work">Work</option>
						</select>
					</div>
					<i
						className="fa-solid fa-plus"
						style={{ color: `${bgColor}` }}
						onClick={addNoteHandler}
					></i>
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
				setNoteTitle={setNoteTitle}
				setNoteContent={setNoteContent}
			/>
		</section>
	);
};

export { NoteInput };
