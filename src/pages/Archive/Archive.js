import React from "react";
import { Sidebar } from "../../components";
import { useNotes } from "../../context/NotesContext";
import { useAuth } from "../../context/AuthContext";
import { restoreFromArchive } from "../../Services/restoreFromArchive";
import { deleteArchiveNote } from "../../Services/deleteArchiveNote";

const Archive = () => {
	const { notesState, notesDispatch } = useNotes();
	const { authState } = useAuth();
	const { token } = authState;
	const { archiveNotes } = notesState;

	const restoreArchiveNoteHandler = (note) => {
		restoreFromArchive(note, token, notesDispatch);
	};

	const deleteArchivesNotesHandler = (note) => {
		deleteArchiveNote(note, token, notesDispatch);
	};
	return (
		<>
			<div className="homepage-container">
				<Sidebar />
				<div className="note-container">
					{archiveNotes.length === 0 ? (
						<p className="no-notes lg-text  mt-4">No Archive Notes</p>
					) : (
						archiveNotes.map((note) => {
							return (
								<div className="new-notes-container" key={note._id}>
									<h1
										className="note-title"
										style={{ backgroundColor: `${note.bgColor}` }}
									>
										{note.title}
									</h1>
									<h4
										className="note-content new-note"
										style={{ backgroundColor: `${note.bgColor}` }}
									>
										{note.content}
									</h4>
									<div
										className="note-footer sm-text"
										style={{ backgroundColor: `${note.bgColor}` }}
									>
										<h6>{note.createdTime}</h6>
										<h6 className="tag-bg">{note.tags}</h6>
										<div className="note-footer-icons">
											<i
												class="fa-solid fa-box-archive"
												onClick={() => restoreArchiveNoteHandler(note)}
											></i>
											<i
												className="fa-solid fa-trash"
												onClick={() => deleteArchivesNotesHandler(note)}
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

export { Archive };
