import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
	const user = true;
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={user ? <Home /> : <Navigate to="/register" />}
				></Route>
			</Routes>
			<Routes>
				<Route
					path="/register"
					element={!user ? <Register /> : <Navigate to="/" />}
				></Route>
			</Routes>
			<Routes>
				<Route
					path="/login"
					element={!user ? <Login /> : <Navigate to="/" />}
				></Route>
			</Routes>
			{user && (
				<>
					<Routes>
						<Route path="/movies" element={<Home type="movies" />}></Route>
						<Route path="/series" element={<Home type="series" />}></Route>
					</Routes>
					<Routes>
						<Route path="/watch" element={<Watch />}></Route>
					</Routes>
				</>
			)}
		</BrowserRouter>
	);
};

export default App;
