import React from "react";
import noteIcon from "../../assets/note-icon.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
	const { authState, signOut } = useAuth();
	return (
		<nav className="navbar-container">
			<div className="navbar-left">
				<Link to="/" className="navbar-brand">
					<h4 className="lg-text">TopNote </h4>
					<img src={noteIcon} alt="note-logo" className="note-logo" />
				</Link>
			</div>
			{!authState.userData && (
				<div className="navbar-right">
					<Link to="/login">
						<button className="btn btn-join">Create Note</button>
					</Link>
				</div>
			)}

			{authState.userData && (
				<div className="navbar-right">
					<Link to="/">
						<button className="btn btn-join" onClick={signOut}>
							Logout
						</button>
					</Link>
				</div>
			)}
		</nav>
	);
};

export { Navbar };
