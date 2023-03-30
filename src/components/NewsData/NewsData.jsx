import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsAllData from "../NewsAllData/NewsAllData";
import Loading from "../Loading/Loading";
import logo from "../../assets/images/img_colored.svg";

const NewsData = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get("https://api-creator-server.vercel.app/news-data")
			.then(function (res) {
				setNewsData(res.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				setLoading(false);
			});
	}, []);

	console.log(newsData);

	return (
		<div>
			<div className="news__data__main py-8 lg:py-20">
				<div className="d-flex align-items-center justify-content-center mb-4">
					<img src={logo} alt="Logo" width="50" height="50" />
					<h1 className="text-3x1 lg:text-left text-center lg:text-5x1 font-bold ms-3">
						New Data
					</h1>
				</div>
				<div className="container py-4">
					<div className="row row-cols-1 row-cols-lg-3 g-4">
						{loading ? (
							<Loading />
						) : (
							newsData.map((data) => (
								<div className="col" key={data._id}>
									<NewsAllData data={data} />
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsData;
