import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Mockman from "mockman-js";
import { Landing, Homepage, Login, Signup } from "./pages/index";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/mock" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
