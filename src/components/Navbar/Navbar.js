import React from "react";
import "./Navbar.css";
import noteIcon from "../../assets/note-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="navbar-left">
				<Link to="/" className="navbar-brand">
					<h4 className="lg-text">TopNote </h4>
				</Link>
				<img src={noteIcon} alt="note-logo" className="note-logo" />
			</div>
			<div className="navbar-right">
				<Link to="/home">
					<button className="btn btn-join">Create Note</button>
				</Link>
			</div>
		</nav>
	);
};

export { Navbar };
