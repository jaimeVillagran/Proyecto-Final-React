import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import NewsDataItem from "../NewsDataItem/NewsDataItem";
import Loading from "../Loading/Loading";

const NewsData = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get("https://api-creator-server.vercel.app/news-data")
			.then(function (res) {
				setNewsData(res.data);
				console.log(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	}, []);

	console.log(newsData);

	return (
		<div className="news__data__main py-8 lg:py-20">
			<h1 className="text-3x1 lg:text-left text-center lg:text-5x1 font-bold">
				New Data
			</h1>
			<div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
				{loading ? (
					<Loading />
				) : newsData.length > 0 ? (
					newsDataItems
				) : (
					<p>No data found</p>
				)}
			</div>
		</div>
	);
};

export default NewsData;
