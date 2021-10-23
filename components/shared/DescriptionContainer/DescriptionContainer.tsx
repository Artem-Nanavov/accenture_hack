import React from 'react';

import style from './style.scss';

interface IProps {
	header: string;
	description: string;
	isRating: boolean;
}

const DescriptionContainer = ({ header, description, isRating }: IProps) => (
	<div className={isRating ? style.descriptionRating : style.description}>
		<p className={style.header}>{header}</p>
		<p className={style.desc}>{description}</p>
	</div>
);

export default DescriptionContainer;