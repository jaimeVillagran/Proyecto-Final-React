import { Card, Container, Row, Col } from "react";
import NewsData from "../NewsData/2.0NewsData";

const NewsDataItem = ({
	data: { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id },
}) => {
	console.log(
		"Data received in NewsDataItem:",
		newsCategory,
		newsDescription,
		newsPreviewImage,
		newsTitle,
		_id
	);

	return (
		<Card>
			<Card.Img variant="top" src={newsPreviewImage} alt="img-blur-shadow" />
			<Card.Body className="text-center">
				<Card.Title>{newsTitle}</Card.Title>
				<Card.Text>{newsDescription.substring(0, 120)}</Card.Text>
			</Card.Body>
			<Card.Footer className="bg-white">
				<Container>
					<Row>
						<Col
							xs={12}
							md={8}
							className="d-flex justify-content-md-start justify-content-center align-items-center">
							<span className="text-capitalize font-weight-bold">
								Category:{" "}
							</span>
							<span className="text-capitalize">{newsCategory}</span>
						</Col>
					</Row>
				</Container>
			</Card.Footer>
		</Card>
	);
};

export default NewsDataItem;
