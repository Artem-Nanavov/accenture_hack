import React from 'react';
import cn from 'classnames';

import style from './style.scss';

const mockData = [
	{
		name: 'Васильев И.Е.',
		date: '15.05.2015 23:55',
		quantity: 1395,
		money: 83305,
	},
	{
		name: 'Васильев И.Е.',
		date: '15.05.2015 23:55',
		quantity: 1395,
		money: 83305,
	},
	{
		name: 'Васильев И.Е.',
		date: '15.05.2015 23:55',
		quantity: 1395,
		money: 83305,
	},
	{
		name: 'Васильев И.Е.',
		date: '15.05.2015 23:55',
		quantity: 1395,
		money: 83305,
	},
	{
		name: 'Васильев И.Е.',
		date: '15.05.2015 23:55',
		quantity: 1395,
		money: 83305,
	},
];

interface ITable {
	className?: string;
}

const Table = ({ className }: ITable) => (
	<table className={cn(style.table, className)}>
		<thead>
			<tr>
				<td>Имя</td>
				<td>Дата регистрации</td>
				<td>Кол-во операций</td>
				<td className={style.money}>Прибыль</td>
			</tr>
		</thead>
		<tbody>
			{mockData.map(({ name, date, quantity, money }) => (
				<tr>
					<td>{name}</td>
					<td>{date}</td>
					<td>{quantity}</td>
					<td>{money} р.</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default Table;
