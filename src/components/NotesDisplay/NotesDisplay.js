import React from "react";
import { addToArchive } from "../../Services/addToArchive";
import parse from "html-react-parser";
import { toast } from "react-toastify";

const NotesDisplay = ({
	notes,
	deleteNotesHandler,
	notesDispatch,
	token,
	setNoteTitle,
	setNoteContent,
	searchNotes,
}) => {
	const editNotes = (note) => {
		setNoteTitle(note.title);
		setNoteContent(note.content);
		notesDispatch({
			type: "EDIT_NOTE",
			payload: { tags: note.tags },
		});
		deleteNotesHandler(note._id);
	};

	const archiveNoteHandler = (note) => {
		addToArchive(note, token, notesDispatch);
	};

	const moveToTrash = (note) => {
		notesDispatch({ type: "MOVE_TO_TRASH", payload: note });
		deleteNotesHandler(note._id);
		toast.success("Note moved to trash");
	};

	return (
		<>
			{searchNotes.map((note) => {
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
									className="fa-solid fa-box-archive"
									onClick={() => archiveNoteHandler(note)}
								></i>
								<i
									className="fa-solid fa-pen"
									onClick={() => editNotes(note)}
								></i>
								<i
									className="fa-solid fa-trash"
									onClick={() => moveToTrash(note)}
								></i>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export { NotesDisplay };
