import React from "react";
import NavBar from "./components/NavBar/NavBar";
import NewsData from "./components/NewsData/NewsData";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
		<div>
			<NavBar />
			<NewsData />
			<Footer />
		</div>
	);
};

export default App;
