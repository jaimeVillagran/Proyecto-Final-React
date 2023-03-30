import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const NewsDataItem = ({ data }) => {
	const img = useMemo(() => {
		return data && data.Img ? (
			<Card.Img variant="top" src={data.Img} />
		) : (
			<Card.Img
				variant="top"
				src="https://via.placeholder.com/150x100.png?text=No+Image"
			/>
		);
	}, [data]);

	const description = useMemo(() => {
		return data?.Description?.substring(0, 120);
	}, [data?.Description]);

	const renderCategory = useCallback(() => {
		if (data?.Category) {
			return (
				<Card.Footer>
					<small className="text-muted">{data.Category}</small>
				</Card.Footer>
			);
		}
	}, [data?.Category]);

	return (
		<Card>
			{img}
			<Card.Body>
				<Card.Title>{data?.Title}</Card.Title>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
			{renderCategory()}
		</Card>
	);
};

NewsDataItem.propTypes = {
	data: PropTypes.object.isRequired,
};

export default NewsDataItem;
