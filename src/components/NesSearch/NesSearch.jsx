import React, { useState, useMemo, useCallback } from "react";
import NewsDataItem from "./NewsDataItem";

function NewsSearch({ data }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

	const filteredData = useMemo(() => {
		// Filtrar los datos en función de la categoría seleccionada
		const filteredByCategory = data.filter(
			(news) =>
				selectedCategory === "" || news.newsCategory === selectedCategory
		);
		// Filtrar los datos en función de la consulta de búsqueda
		return filteredByCategory.filter(
			(news) =>
				news.newsTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
				news.newsDescription.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [data, selectedCategory, searchQuery]);

	const handleSearch = useCallback((e) => {
		setSearchQuery(e.target.value);
	}, []);

	const handleCategoryChange = useCallback((e) => {
		setSelectedCategory(e.target.value);
	}, []);

	return (
		<div>
			<h2>News Search</h2>
			<div>
				<label htmlFor="search">Search:</label>
				<input
					id="search"
					type="text"
					value={searchQuery}
					onChange={handleSearch}
				/>
			</div>
			<div>
				<label htmlFor="category">Category:</label>
				<select
					id="category"
					value={selectedCategory}
					onChange={handleCategoryChange}>
					<option value="">All Categories</option>
					<option value="politics">Politics</option>
					<option value="sports">Sports</option>
					<option value="technology">Technology</option>
				</select>
			</div>
			<div>
				{filteredData.map((news) => (
					<NewsDataItem key={news._id} data={news} />
				))}
			</div>
		</div>
	);
}

export default NewsSearch;
