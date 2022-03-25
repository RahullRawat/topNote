import React from "react";
import "./Landing.css";
import heroImg from "../../assets/hero-img.png";
import noteIcon from "../../assets/note-icon.png";

const Landing = () => {
	return (
		<div className="landing-container">
			<header className="header">
				<a href="#" className="header-container">
					<h4 className="xl-text">TopNote </h4>
					<img src={noteIcon} alt="" className="note-logo" />
				</a>
			</header>
			<div className="hero-container">
				<div className="hero-container-left">
					<div className="heading ">
						<h1 className="heading-1">All your notes.</h1>
						<h1 className="heading-2">Organized.</h1>
						<h1 className="heading-3">Effortless.</h1>
					</div>
					<div className="heading-description">
						<p>
							easily, create, manage, and categorize your notes with topnote
							app.
						</p>
					</div>

					<div className="auth-container">
						<button className="btn btn-join">
							Signup <span>- it's free</span>
						</button>
						<button className="btn btn-signin">
							Already have an account ?
						</button>
					</div>
				</div>
				<div className="hero-container-right">
					<img src={heroImg} alt="hero-img" />
				</div>
			</div>
		</div>
	);
};

export { Landing };
