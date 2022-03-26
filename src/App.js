import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing, Homepage } from "./pages/index";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
