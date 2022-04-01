import React, { useState } from "react";
import "./YourNotes.css";
import { Sidebar } from "../../components/index";
import { useNotes } from "../../context/NotesContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const YourNotes = () => {
	const { notesState } = useNotes();
	const { notes } = notesState;
	const { authState } = useAuth();
	const { token } = authState;
	const [filteredNotes, setFilteredNotes] = useState(notes);
	const navigate = useNavigate();

	const tagFilterHandler = (e) => {
		const checkTag = notes.filter((note) => note.tags === e.target.name);
		setFilteredNotes(checkTag);
	};

	const clearTagFilterHandler = () => {
		setFilteredNotes(notes);
	};

	const sortByDateHandler = (e) => {
		if (e.target.value === "sort-newest") {
			const sortedNotes = [...notes].sort((date1, date2) =>
				date2.createdTime
					.split("/")
					.reverse()
					.join()
					.localeCompare(date1.createdTime.split("/").reverse().join())
			);
			setFilteredNotes(sortedNotes);
		}
		if (e.target.value === "sort-oldest") {
			const sortedNotes = [...notes].sort((date1, date2) =>
				date1.createdTime
					.split("/")
					.reverse()
					.join()
					.localeCompare(date2.createdTime.split("/").reverse().join())
			);
			setFilteredNotes(sortedNotes);
		}
	};

	return (
		<div>
			<div className="tag-btn-container lg-text">
				<div className="filter-tag-container">
					<h6 className="filter-by-tag">Filter By Tag :-</h6>
					<div className="filter-btn-container">
						<button
							className="btn btn-primary btn-tag"
							name="meeting"
							onClick={(e) => tagFilterHandler(e)}
						>
							Meeting
						</button>
						<button
							className="btn btn-primary btn-tag "
							name="shopping"
							onClick={(e) => tagFilterHandler(e)}
						>
							Shopping
						</button>
						<button
							className="btn btn-primary btn-tag"
							name="grocery"
							onClick={(e) => tagFilterHandler(e)}
						>
							Grocery
						</button>
						<button
							className="btn btn-primary btn-tag"
							name="work"
							onClick={(e) => tagFilterHandler(e)}
						>
							Work
						</button>
						<button
							className="btn btn-primary btn-tag"
							onClick={clearTagFilterHandler}
						>
							Clear
						</button>
					</div>
				</div>
				<div className=" filter-tag-container">
					<h6 className="filter-by-tag">Sort By Date :-</h6>
					<div className="filter-btn-container">
						<label htmlFor="date1">
							<input
								type="radio"
								id="date1"
								name="date"
								value="sort-newest"
								onChange={(e) => sortByDateHandler(e)}
							/>
							Date Newest
						</label>
						<label htmlFor="date">
							<input
								type="radio"
								id="date"
								name="date"
								value="sort-oldest"
								onChange={(e) => sortByDateHandler(e)}
							/>
							Date Oldest
						</label>
					</div>
				</div>
			</div>
			<div className="homepage-container">
				<Sidebar />
				<div className="note-container">
					{notes.length === 0 ? (
						<p className="no-notes lg-text  mt-4">No Notes Here</p>
					) : (
						filteredNotes.map((note) => {
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
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export { YourNotes };
