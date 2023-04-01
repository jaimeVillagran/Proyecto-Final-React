import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<div className="d-flex align-items-center justify-content-center mb-4">
					<img
						src="/./src/assets/images/img_colored.svg"
						alt="Logo"
						width="50"
						height="50"
						className="d-inline-block align-text-top"
					/>
					<h1 className="text-3x1 lg:text-left text-center lg:text-5x1 font-bold ms-3">
						New Data
					</h1>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
