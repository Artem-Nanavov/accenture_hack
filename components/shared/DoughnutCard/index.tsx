import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import cn from 'classnames';

import styles from './styles.scss';

interface IDoughnutCard {
	title: string;
	data: any[];
	labels: any[];
	isChoice: boolean;
	handleChange?: (data: boolean) => void;
	changeOption?: boolean;
	changeColor?: boolean;
}

const options = {
	cutout: '60%',
	layout: {
		padding: 15,
	},
	elements: {
		bar: {
			borderWidth: 0,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
};

const DoughnutCard = ({ title, data, labels, isChoice, handleChange, changeOption, changeColor }: IDoughnutCard) => {
	const d = useMemo(
		() => ({
			labels,
			datasets: [
				{
					data: data.map((_d) => _d.count),
					backgroundColor: ['#6B8E23', '#8E96FF', changeColor ? '#E4514D' : '#FCA4FF'],
					hoverOffset: 20,
					borderWidth: 0,
				},
			],
		}),
		[data, changeColor],
	);

	return (
		<div className={styles.wrap}>
			{isChoice && handleChange ? (
				<div className={styles.choiceContainer}>
					<span onClick={() => handleChange(true)} className={changeOption ? styles.title3 : styles.title2}>
						Физические лица
					</span>
					<span onClick={() => handleChange(false)} className={changeOption ? styles.title2 : styles.title3}>
						Юридические лица
					</span>
				</div>
			) : (
				<p className={styles.title}>{title}</p>
			)}

			<div className={styles.info}>
				<div style={{ width: '160px', height: '160px' }}>
					<Doughnut width={169} height={169} options={options} data={d as any} />
				</div>

				<div className={styles.labels}>
					{labels.map((label, i) => (
						<div key={label} className={styles.label}>
							<div className={cn(styles[`color_${i + 1}`], { [styles.c]: changeColor && i === 2 })} />

							<p>{label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DoughnutCard;
