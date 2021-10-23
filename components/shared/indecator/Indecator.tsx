import React from 'react';
import Rectangle from 'assets/images/rectangle';
import style from './style.scss';

interface IProps {
	isPlus: boolean;
}

const Indicator = ({ isPlus }: IProps) => (
	<div className={isPlus ? style.imageContainer : style.imageContainerRevert}>
		<Rectangle color={isPlus ? '#5EFF5A' : '#E4514D'} />
	</div>
);

export default Indicator;
