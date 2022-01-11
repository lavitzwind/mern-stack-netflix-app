import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<Home />
							</div>
						</>
					}
				></Route>
				<Route
					path="/users"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<UserList />
							</div>
						</>
					}
				></Route>
				<Route
					path="/user/:userId"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<User />
							</div>
						</>
					}
				></Route>
				<Route
					path="/newUser"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<NewUser />
							</div>
						</>
					}
				></Route>
				<Route
					path="/products"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<ProductList />
							</div>
						</>
					}
				></Route>
				<Route
					path="/product/:productId"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<Product />
							</div>
						</>
					}
				></Route>
				<Route
					path="/newproduct"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<NewProduct />
							</div>
						</>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
