import s from "./style.module.css";

const Logo = ({ image, title }) => (
	<div>
		<div className={s.container}>
			<img className={s.img} src={image} alt="logo" />
			<span className={s.title}>{title}</span>
		</div>
	</div>
);

export default Logo;
