import React from "react";
import "./Homepage.css";

const Homepage = () => {
	return (
		<div className="homepage-container">
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
						<h6 className="sm-text">Rahul Rawat</h6>
						<span className="sm-text">@rahulrawat</span>
					</div>
				</div>
			</aside>
			<section className="note-container">
				<form>
					<input
						type="text"
						name="title"
						className="note-title"
						placeholder="Title"
					/>
					<textarea
						name="content"
						cols="30"
						rows="10"
						placeholder="Type your note..."
						className="note-content"
					></textarea>
					<div className="note-footer sm-text">
						<h6>Created on 26/03/2022</h6>
						<div className="note-footer-icons">
							<i className="fa-solid fa-palette"></i>
							<i className="fa-solid fa-box-archive"></i>
							<i className="fa-solid fa-trash"></i>
						</div>
					</div>
				</form>
				<form>
					<input
						type="text"
						name="title"
						className="note-title"
						placeholder="Title"
						value="New Note Created"
					/>
					<textarea
						name="content"
						cols="30"
						rows="10"
						placeholder="Type your note..."
						className="note-content"
						value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurierelease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					></textarea>
					<div className="note-footer sm-text">
						<h6>Created on 25/03/2022</h6>
						<div className="note-footer-icons">
							<i className="fa-solid fa-palette"></i>
							<i className="fa-solid fa-box-archive"></i>
							<i className="fa-solid fa-trash"></i>
						</div>
					</div>
				</form>
				<form>
					<input
						type="text"
						name="title"
						className="note-title"
						placeholder="Title"
						value="New Note Created"
					/>
					<textarea
						name="content"
						cols="30"
						rows="10"
						placeholder="Type your note..."
						className="note-content"
						value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurierelease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					></textarea>
					<div className="note-footer sm-text">
						<h6>Created on 25/03/2022</h6>
						<div className="note-footer-icons">
							<i className="fa-solid fa-palette"></i>
							<i className="fa-solid fa-box-archive"></i>
							<i className="fa-solid fa-trash"></i>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
};

export { Homepage };
