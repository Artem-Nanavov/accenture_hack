import React from 'react';

import Indicator from 'components/shared/indicator/Indicator';

import style from './style.scss';

interface IProps {
	isPlus: boolean;
	quantity: number;
	money: number;
	header: string;
}

const TableLine = ({ isPlus, quantity, money, header }: IProps) => (
	<div className={style.tableLine}>
		<div className={style.headerContainer}>
			<p className={style.header}>{header}</p>
		</div>
		<p className={style.quantity}>{quantity}</p>
		<div className={style.moneyContainer}>
			<p className={style.money}>{money} млн.</p>
		</div>
		<Indicator isPlus={isPlus} />
	</div>
);

export default TableLine;
