import React from 'react';

import Rectangle from '../../../assets/images/rectengle/Rectangle';

import style from './style.scss';

interface IProps {
	header: string;
	count: number;
	description: string;
	isPlus: boolean;
	percent: number;
}

const CompareInfoBlock = ({ header, count, description, isPlus, percent }: IProps) => (
	<div className={style.compareContainer}>
		<span className={style.title}>{header}</span>
		<div className={style.counterContainer}>
			<span className={style.counter}>{count}</span>
			<div className={style.percentContainer}>
				<div className={isPlus ? style.imageContainer : style.imageContainerRevert}>
					<Rectangle color={isPlus ? '#6B8E23' : '#E4514D'} />
				</div>
				<span className={isPlus ? style.green : style.red}>{percent}%</span>
			</div>
		</div>
		<span className={style.description}>{description}</span>
	</div>
);

export default CompareInfoBlock;
