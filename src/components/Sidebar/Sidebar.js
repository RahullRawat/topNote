import React from "react";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
	const { authState } = useAuth();
	const { userData } = authState;
	return (
		<aside className="sidebar">
			<ul>
				<li>
					<i className="fa-solid fa-house"></i>Home
				</li>
				<li>
					<i class="fa-solid fa-tags"></i>Label
				</li>
				<li>
					<i class="fa-solid fa-box-archive"></i>Archive
				</li>
				<li>
					<i class="fa-solid fa-trash-can"></i>Trash
				</li>
				<li>
					<i class="fa-solid fa-user"></i>Profile
				</li>
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
