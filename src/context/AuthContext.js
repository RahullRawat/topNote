import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer/AuthReducer";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

const initialState = {
	firstName: "",
	email: "",
	password: "",
	error: false,
	userData: "",
	token: "",
};

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, initialState);
	const { email, password, firstName } = authState;
	const navigate = useNavigate();

	const logIn = async () => {
		try {
			const response = await axios.post("/api/auth/login", {
				email,
				password,
			});
			if (response.status === 200) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem(
					"userData",
					JSON.stringify(response.data.foundUser)
				);

				authDispatch({
					type: "LOG_IN",
					payload: {
						userData: response.data.foundUser,
						token: response.data.encodedToken,
					},
				});
				navigate("/home");
				toast.success("Successfully Logged In");
			}
		} catch (error) {
			toast.error(error.response.data.errors[0]);
		}
	};

	const signUp = async () => {
		try {
			const response = await axios.post("/api/auth/signup", {
				firstName,
				email,
				password,
			});
			if (response.status === 200 || 201) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem(
					"userData",
					JSON.stringify(response.data.createdUser)
				);
				authDispatch({
					type: "SIGN_UP",
					payload: {
						userData: response.data.createdUser,
						token: response.data.encodedToken,
					},
				});
				navigate("/home");
				toast.success("Your account has been created");
			}
		} catch (error) {
			toast.error(error.response.data.errors[0]);
		}
	};

	const signOut = () => {
		authDispatch({ type: "LOGOUT" });
		localStorage.removeItem("token");
		localStorage.removeItem("userData");
		toast.success("Successfully Logged Out");
	};

	useEffect(() => {
		const loadToken = localStorage.getItem("token");
		const loadUser = JSON.parse(localStorage.getItem("userData"));
		if (loadUser) {
			authDispatch({
				type: "LOAD_USER_DATA",
				payload: { loadToken, loadUser },
			});
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{ authState, authDispatch, logIn, signUp, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
