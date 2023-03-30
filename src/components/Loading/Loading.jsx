import React from "react";
import "./style.module.css";

const Loading = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Loading;
