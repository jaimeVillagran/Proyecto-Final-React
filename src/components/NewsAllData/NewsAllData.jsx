import React from "react";

const NewsAllData = ({ data }) => {
	const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } =
		data;
	return (
		<Container className="my-4">
			<Card>
				<Card.Img variant="top" src={newsPreviewImage} alt="img-blur-shadow" />
				<Card.Body>
					<Card.Title>{newsTitle}</Card.Title>
					<Card.Text>{newsDescription.slice(0, 120)}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Container fluid>
						<Row>
							<Col>
								<p className="text-capitalize fw-bold mb-0">Category:</p>
							</Col>
							<Col>
								<p className="text-capitalize">{newsCategory}</p>
							</Col>
						</Row>
					</Container>
				</Card.Footer>
			</Card>
		</Container>
	);
};

export default NewsAllData;
