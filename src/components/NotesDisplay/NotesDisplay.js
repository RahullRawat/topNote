import React from "react";

const NotesDisplay = ({ notes, deleteNotesHandler, notesDispatch }) => {
	const editNotes = (note) => {
		notesDispatch({
			type: "EDIT_NOTE",
			payload: { title: note.title, content: note.content },
		});
		deleteNotesHandler(note._id);
	};

	return (
		<>
			{notes.map((note) => {
				return (
					<div className="new-notes-container" key={note._id}>
						<h1 className="note-title">{note.title}</h1>
						<h4 className="note-content new-note">{note.content}</h4>
						<div className="note-footer sm-text">
							<h6>{note.createdTime}</h6>
							<div className="note-footer-icons">
								<i className="fa-solid fa-palette"></i>
								<i className="fa-solid fa-box-archive"></i>
								<i
									className="fa-solid fa-pen"
									onClick={() => editNotes(note)}
								></i>
								<i
									className="fa-solid fa-trash"
									onClick={() => deleteNotesHandler(note._id)}
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
