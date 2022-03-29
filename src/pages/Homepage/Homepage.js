import React from "react";
import "./Homepage.css";
import { Sidebar, NoteInput } from "../../components/index";

const Homepage = () => {
	return (
		<div className="homepage-container">
			<Sidebar />
			<NoteInput />
		</div>
	);
};

export { Homepage };
