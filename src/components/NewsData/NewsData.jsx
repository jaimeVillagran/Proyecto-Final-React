import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import NewsAllData from "../NewsAllData/NewsAllData";
import Loading from "../Loading/Loading";

const NewsData = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Selected category: ", selectedCategory);
		console.log("Search term: ", searchTerm);
	};

	const handleCategoryChange = useCallback((e) => {
		setSelectedCategory(e.target.value);
	}, []);

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

	const categories = useMemo(
		() => ["all", ...new Set(newsData.map((data) => data.newsCategory))],
		[newsData]
	);

	return (
		<div>
			<div className="news__data__main py-8 lg:py-20">
				<div className="d-flex align-items-center justify-content-center mb-4">
					<form className="d-flex" onSubmit={handleSearch} role="search">
						<select
							className="form-select me-2"
							aria-label="Select a news category"
							value={selectedCategory}
							onChange={handleCategoryChange}>
							{categories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</form>
				</div>
				<div className="container py-4">
					<div className="row row-cols-1 row-cols-lg-3 g-4">
						{loading ? (
							<Loading />
						) : (
							newsData
								.filter(
									(data) =>
										selectedCategory === "all" ||
										data.newsCategory === selectedCategory
								)
								.filter((data) =>
									data.newsTitle
										.toLowerCase()
										.includes(searchTerm.toLowerCase())
								)
								.map((data) => (
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
