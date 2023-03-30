import { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import NewsDataItem from "../NewsDataItem/3.0NewsDataItem";
import Loading from "../Loading/Loading";

const NewsData = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = useCallback(() => {
		setLoading(true);
		axios
			.get("https://api-creator-server.vercel.app/news-data")
			.then(({ data }) => {
				console.log("data axios:", data);
				setNewsData(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	console.log("Data received in NewsData:", newsData);

	const filteredNewsData = useMemo(() => {
		return newsData.filter((data) => data.category === "Technology");
	}, [newsData]);

	return (
		<div className="container py-5">
			<h1 className="text-center fw-bold mb-5">New Data</h1>
			{loading ? (
				<Loading />
			) : (
				<div className="row row-cols-1 row-cols-lg-3 g-4">
					{filteredNewsData.length > 0 ? (
						filteredNewsData.map((data) => (
							<div className="col" key={data._id}>
								<NewsDataItem data={data} />
							</div>
						))
					) : (
						<p className="text-center">No data found</p>
					)}
				</div>
			)}
		</div>
	);
};

export default NewsData;
