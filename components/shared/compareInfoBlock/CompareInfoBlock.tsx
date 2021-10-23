import React from 'react';

import greenRectangle from '../../../assets/images/png/greenRectangle.png';
import redRectangle from '../../../assets/images/png/redRectangle.png';

import style from './style.scss';

interface IProps {
	header: string;
	count: number;
	description: string;
	isPlus: boolean;
	percent: number;
}

const CompareInfoBlock = (props: IProps) => {
	const { header, count, description, isPlus, percent } = props;

	return (
		<div className={style.compareContainer}>
			<span className={style.title}>{header}</span>
			<div className={style.counterContainer}>
				<span className={style.counter}>{count}</span>
				<div className={style.percentContainer}>
					<img src={isPlus ? greenRectangle : redRectangle} alt={isPlus ? 'green rectangle' : 'red rectangle'} />
					<span className={isPlus ? style.green : style.red}>{percent}%</span>
				</div>
			</div>
			<span className={style.description}>{description}</span>
		</div>
	);
};

export default CompareInfoBlock;
