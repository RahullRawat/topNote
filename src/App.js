import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import Mockman from "mockman-js";
import {
	Landing,
	Homepage,
	Login,
	Signup,
	YourNotes,
	Archive,
	Trash,
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
				<Route path="/home" element={<Homepage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/yournotes" element={<YourNotes />} />
				<Route path="/archive" element={<Archive />} />
				<Route path="/trash" element={<Trash />} />
				<Route path="/mock" element={<Mockman />} />
				<Route path="*" element={<p>There's nothing here!</p>} />
			</Routes>
		</div>
	);
}

export default App;
