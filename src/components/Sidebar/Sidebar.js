import React from "react";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const { authState } = useAuth();
	const { userData } = authState;
	return (
		<aside className="sidebar">
			<ul>
				<Link to="/home">
					<li>
						<i className="fa-solid fa-house"></i>Home
					</li>
				</Link>
				<Link to="/yournotes">
					<li>
						<i class="fa-solid fa-tags"></i>Your Notes
					</li>
				</Link>
				<Link to="/archive">
					<li>
						<i class="fa-solid fa-box-archive"></i>Archive
					</li>
				</Link>
				<Link to="/trash">
					<li>
						<i class="fa-solid fa-trash-can"></i>Trash
					</li>
				</Link>
			</ul>
			<div className="footer-profile">
				<img
					src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
					class="avatar avatar-sm"
					alt="profile-avatar"
				/>
				<div className="profile details">
					<h6 className="sm-text">{userData.firstName}'s Notes</h6>
					<span className="sm-text">@{userData.firstName}</span>
				</div>
			</div>
		</aside>
	);
};

export { Sidebar };
