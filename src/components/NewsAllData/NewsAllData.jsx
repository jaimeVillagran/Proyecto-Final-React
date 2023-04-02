import React from "react";

const NewsAllData = ({ data }) => {
	const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } =
		data;
	return (
		<div className="container h-100">
			<div className="card h-100">
				<img
					src={newsPreviewImage}
					alt="img-blur-shadow"
					className="card-img-top"
				/>
				<div className="card-body">
					<h2 className="card-title fs-4 fw-bolder">{newsTitle}</h2>
					<p className="card-text fs-6">{newsDescription.slice(0, 220)}</p>
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
