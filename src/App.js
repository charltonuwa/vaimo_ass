import React from "react";
import { BrowserRouter as Routes, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
			</nav>

			<Routes>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/products">
					<Products />
				</Route>
				<Route path="/products/:productId">
					<ProductDetail />
				</Route>
			</Routes>
			{/*
								Route between 2 components depending on the path:
								1. Home page ("/")
								2. Products Page ("/products")
								
								** Home Page **
								• Can be a basic home page, maybe welcoming the user to your site and giving some background about yourself as a developer
								
								** Products Page **
								• Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
						*/}
		</div>
	);
}

export default App;
