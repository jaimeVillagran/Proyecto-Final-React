import React from "react";

const NewsAllData = ({ data }) => {
	const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } =
		data;
	return (
		<div className="container h-100">
			<div className="card h-100">
				<img
					src={newsPreviewImage}
					className="card-img-top"
					alt="img-blur-shadow"
				/>
				<div className="card-body">
					<h3 className="card-title">{newsTitle}</h3>
					<p className="card-text">{newsDescription.slice(0, 120)}</p>
				</div>
				<div className="card-footer">
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<p className="text-capitalize fw-bold mb-0">Category:</p>
							</div>
							<div className="col">
								<p className="text-capitalize">{newsCategory}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsAllData;
