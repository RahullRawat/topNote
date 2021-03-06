import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-img.png";
import "./Landing.css";
import { useAuth } from "../../context/AuthContext";

const Landing = () => {
	const { authState } = useAuth();
	const { token } = authState;
	return (
		<div className="landing-container">
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
						<div className="flex">
							<Link to="/signup">
								<button className="btn btn-join">
									Signup <span>- it's free</span>
								</button>
							</Link>
							{token && (
								<Link to="/home">
									<button className="btn btn-join">Go to notes</button>
								</Link>
							)}
						</div>
						<Link to="/login">
							<button className="btn btn-signin">
								Already have an account ?
							</button>
						</Link>
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
