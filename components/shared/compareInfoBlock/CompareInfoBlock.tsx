import React from 'react';

import Indicator from 'components/shared/indecator/Indecator';

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
				<Indicator isPlus={isPlus} />
				<span className={isPlus ? style.green : style.red}>{percent}%</span>
			</div>
		</div>
		<span className={style.description}>{description}</span>
	</div>
);

export default CompareInfoBlock;
