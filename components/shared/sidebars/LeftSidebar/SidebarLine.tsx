import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.scss';

interface IProps {
	header: string;
	url: string;
	image: string;
}

const SidebarLine = ({ header, url, image }: IProps) => (
	<NavLink exact to={url} className={style.sidebarLine} activeClassName={style.activeSidebarLine}>
		<img src={image} alt={header} />
		{header}
	</NavLink>
);

export default SidebarLine;
