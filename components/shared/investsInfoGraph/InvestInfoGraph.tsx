import React from 'react';

import RedGraph from 'assets/images/graphs/RedGraph';
import YellowGraph from 'assets/images/graphs/YellowGraph';
import VioletGraph from 'assets/images/graphs/VioletGraph';
import GreenGraph from 'assets/images/graphs/GreenGraph';
import Indicator from 'components/shared/indecator/Indecator';

import style from './style.scss';

const mockArrayData = [
	{
		name: 'Депозиты',
		count: 123,
		isPlus: true,
	},
	{
		name: 'Кредиты',
		count: 600,
		isPlus: false,
	},
	{
		name: 'Др. металлы',
		count: 723,
		isPlus: true,
	},
	{
		name: 'Инвестиции',
		count: 823,
		isPlus: false,
	},
];

const ColorOfGraph = ({ count }: { count: number }) => {
	switch (true) {
		case count < 600:
			return <RedGraph />;
		case count < 700:
			return <YellowGraph />;
		case count < 800:
			return <VioletGraph />;
		default:
			return <GreenGraph />;
	}
};
const InvestInfoGraph = () => (
	<div className={style.graphContainer}>
		<div className={style.header}>
			<p>Текущий доход</p>
			<div className={style.countContainer}>
				<p>124,05 млн</p>
				<Indicator isPlus={true} />
				<span className={true ? style.green : style.red}>2 %</span>
			</div>
			<p className={style.description}>По сравнению с 190 млн. в прошлом году</p>
		</div>
		<div className={style.content}>
			{mockArrayData.map(({ name, count, isPlus }, index) => (
				<div key={index} className={style.contentGraph}>
					<div className={style.nameContainer}>
						<p className={style.name}>{name}</p>
					</div>
					<p className={style.count}>{count}</p>
					<ColorOfGraph count={count} />
					<Indicator isPlus={isPlus} />
				</div>
			))}
		</div>
	</div>
);

export default InvestInfoGraph;
