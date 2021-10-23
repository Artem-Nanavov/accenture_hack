import React from 'react';

import TableLine from 'components/shared/progressTable/TableLine';
import style from './style.scss';

const testMockData = [
	{
		header: 'Депозиты',
		quantity: 123,
		money: 123,
		isPlus: true,
	},
	{
		header: 'Кредиты',
		quantity: 123,
		money: 123,
		isPlus: false,
	},
	{
		header: 'Др. металлы',
		quantity: 123,
		money: 123,
		isPlus: true,
	},
	{
		header: 'Инвестиции',
		quantity: 123,
		money: 123,
		isPlus: false,
	},
];

const ProgressTable = () => (
	<div className={style.tableContainer}>
		{testMockData.map(({ header, quantity, money, isPlus }, index) => (
			<TableLine key={index} isPlus={isPlus} quantity={quantity} money={money} header={header} />
		))}
	</div>
);

export default ProgressTable;
