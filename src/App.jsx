import React from "react";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import NewsData from "./components/NewsData/NewsData";
import Footer from "./components/Footer/Footer";
import logoImg from "./assets/images/img_colored.svg";
import "./App.css";

const App = () => {
	return (
		<div>
			<div className="col-4">
				<Logo title="New Data" image={logoImg} />
			</div>

			<NewsData />
			<Footer />
		</div>
	);
};

export default App;
