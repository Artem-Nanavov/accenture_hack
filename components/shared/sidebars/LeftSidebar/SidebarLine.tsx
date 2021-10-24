import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.scss';

interface IProps {
	header: string;
	url: string;
	image: string;
	cur: string;
}

const SidebarLine = ({ header, url, image, cur }: IProps) => {
	const checkActive = (location: any, c: string) => {
		if (!location) return false;

		const { pathname } = location;

		return pathname.includes(c);
	};

	return (
		<NavLink
			exact
			to={url}
			isActive={(_, location) => checkActive(location, cur)}
			className={style.sidebarLine}
			activeClassName={style.activeSidebarLine}
		>
			<img src={image} alt={header} />
			{header}
		</NavLink>
	);
};

export default SidebarLine;
