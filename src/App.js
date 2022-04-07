import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, RequireAuth } from "./components/index";
import Mockman from "mockman-js";
import {
	Landing,
	Homepage,
	Login,
	Signup,
	YourNotes,
	Archive,
	Trash,
	Error404,
} from "./pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				theme="colored"
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route
					path="/home"
					element={
						<RequireAuth>
							<Homepage />
						</RequireAuth>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/yournotes"
					element={
						<RequireAuth>
							<YourNotes />
						</RequireAuth>
					}
				/>
				<Route
					path="/archive"
					element={
						<RequireAuth>
							<Archive />
						</RequireAuth>
					}
				/>
				<Route
					path="/trash"
					element={
						<RequireAuth>
							<Trash />
						</RequireAuth>
					}
				/>
				<Route path="/mock" element={<Mockman />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default App;
