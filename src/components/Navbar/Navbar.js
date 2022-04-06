import React, { useState } from "react";
import noteIcon from "../../assets/note-icon.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
	const { authState, signOut } = useAuth();
	const [mobileSidebar, setMobileSidebar] = useState(false);

	const showAside = () => {
		setMobileSidebar(!mobileSidebar);
	};

	const closeSidebar = () => {
		setMobileSidebar(!mobileSidebar);
	};
	return (
		<>
			<nav className="navbar-container">
				<div className="navbar-left">
					<i class="fa-solid fa-bars" onClick={showAside}></i>
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
			<aside
				className={
					mobileSidebar ? `${"mobile-sidebar show-aside"}` : "mobile-sidebar"
				}
			>
				<ul>
					<Link to="/home">
						<li onClick={closeSidebar}>
							<i className="fa-solid fa-house"></i>Home
						</li>
					</Link>
					<Link to="/yournotes">
						<li onClick={closeSidebar}>
							<i class="fa-solid fa-tags"></i>Your Notes
						</li>
					</Link>
					<Link to="/archive">
						<li onClick={closeSidebar}>
							<i class="fa-solid fa-box-archive"></i>Archive
						</li>
					</Link>
					<Link to="/trash">
						<li onClick={closeSidebar}>
							<i class="fa-solid fa-trash-can"></i>Trash
						</li>
					</Link>
				</ul>
				{authState.userData && (
					<div className="footer-profile">
						<img
							src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
							class="avatar avatar-sm"
							alt="profile-avatar"
						/>
						<div className="profile details">
							<h6 className="sm-text">
								{authState.userData.firstName}'s Notes
							</h6>
							<span className="sm-text">@{authState.userData.firstName}</span>
						</div>
					</div>
				)}
			</aside>
		</>
	);
};

export { Navbar };
