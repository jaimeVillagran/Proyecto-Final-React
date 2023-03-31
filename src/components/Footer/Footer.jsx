import styled from "styled-components";

const Footer = styled.footer`
	background-color: #333;
	color: #fff;
	padding: 15px;
	align-items: center;
	text-align: center;
`;

function MyFooter() {
	return (
		<Footer>
			<p>All Rights Reserved © 2023</p>
			<p>Proyecto React - Jaime Villagran</p>
		</Footer>
	);
}

export default MyFooter;
