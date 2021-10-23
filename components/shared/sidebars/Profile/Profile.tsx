import React from 'react';

import style from './style.scss'

interface IProps {
	image: string;
	name: string;
}

const Profile = ({ image, name }: IProps) =>
	<div className={style.profile}>
		<img src={image} alt={name} />
		<span>
			{name}
		</span>
	</div>;

export default Profile;