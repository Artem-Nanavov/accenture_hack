import React from 'react';
import style from 'components/shared/compareInfoBlock/style.scss';
import Rectangle from '../../../assets/images/rectengle/Rectangle';

interface IProps {
	isPlus: boolean;
}

const Indicator = ({ isPlus }: IProps) => (
	<div className={isPlus ? style.imageContainer : style.imageContainerRevert}>
		<Rectangle color={isPlus ? '#6B8E23' : '#E4514D'} />
	</div>
);

export default Indicator;
