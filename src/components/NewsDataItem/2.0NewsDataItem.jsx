import { card, cardbody } from "react-bootstrap";

const NewsDataItem = ({
	data: { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id },
}) => {
	return (
		<div className="card">
			<img
				src={newsPreviewImage}
				className="card-img-top"
				alt="img-blur-shadow"
			/>
			<div className="card-body text-center">
				<h4 className="card-title mb-2">{newsTitle}</h4>
				<p className="card-text"> {newsDescription.substring(0, 120)} </p>
				<span className="fw-bold"> Category: {newsCategory} </span>
			</div>
		</div>
	);
};

export default NewsDataItem;
