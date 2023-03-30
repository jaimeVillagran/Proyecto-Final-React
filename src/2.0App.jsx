import React, { useState, useEffect } from "react";
import NewsData from "./components/NewsData/3.0NewsData";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<div>
					<div className="container mx-auto max-w-screen-xl py-4">
						<NewsData />
					</div>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default App;
