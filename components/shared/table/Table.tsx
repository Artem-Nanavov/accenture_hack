import React from 'react';
import cn from 'classnames';

import style from './style.scss';

interface ITable {
	className?: string;
	data: any[];
}

const Table = ({ className, data }: any) => (
	<table className={cn(style.table, className)}>
		<thead>
			<tr>
				<td>Имя</td>
				<td>Дата регистрации</td>
				<td>Кол-во операций</td>
				<td>Прибыль</td>
			</tr>
		</thead>
		<tbody>
			{data.map(({ username, created_at, operations_count, operations_plus }: any) => (
				<tr key={username}>
					<td>{username}</td>
					<td>{new Date(created_at).toLocaleDateString('en-US')}</td>
					<td>{operations_count}</td>
					<td>{operations_plus} р.</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default Table;
