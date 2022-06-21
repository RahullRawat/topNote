import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Authentication.css";

export const Login = () => {
	const { authState, authDispatch, logIn } = useAuth();
	const { email, password, error } = authState;

	const logInHandler = (e) => {
		e.preventDefault();
		logIn();
	};
	const guestLoginHandler = (e) => {
		e.preventDefault();
		authDispatch({ type: "LOG_IN_EMAIL", payload: "rahulsingh@gmail.com" });
		authDispatch({ type: "LOG_IN_PASSWORD", payload: "rahulsingh" });
	};
	return (
		<section className="login-container">
			<div className="login">
				{error && (
					<h6 className="text-center login-error-msg">
						"Please try again later"
					</h6>
				)}
				<h1 className="login-title md-text">Login</h1>
				<form className="login-form sm-text">
					<label htmlFor="email">Email </label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Enter Email"
						value={email}
						onChange={(e) =>
							authDispatch({ type: "LOG_IN_EMAIL", payload: e.target.value })
						}
						required
						autoComplete="off"
					/>

					<label htmlFor="password">Password </label>
					<input
						id="password"
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) =>
							authDispatch({ type: "LOG_IN_PASSWORD", payload: e.target.value })
						}
						required
						autoComplete="off"
					/>
					<Link to="#" className="forgot-password">
						Forgot Your Password ?
					</Link>
					<button
						type="submit"
						onClick={logInHandler}
						className="btn btn-login"
					>
						Login
					</button>
					<button className="btn btn-guest-login" onClick={guestLoginHandler}>
						Guest Credentials
					</button>

					<div className="no-account">
						Don't have an account ? <Link to="/signup">Sign Up </Link>
					</div>
				</form>
			</div>
		</section>
	);
};
