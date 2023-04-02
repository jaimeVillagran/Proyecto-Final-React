import s from "styled-components";

const Footer = s.footer`
	background-color: #58d68d;
	color: #fff;
	padding: 15px;
	align-items: center;
	text-align: center;
`;

function MyFooter() {
	return (
		<Footer>
			<p>All Rights Reserved © 2023</p>
			<p>Proyect React - Jaime Villagran</p>
		</Footer>
	);
}

export default MyFooter;
