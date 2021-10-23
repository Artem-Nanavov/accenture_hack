import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './styles.scss';

interface IDoughnutCard {
	title: string;
	data: any[];
	labels: any[];
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

const DoughnutCard = ({ title, data, labels }: IDoughnutCard) => {
	const d = useMemo(
		() => ({
			labels,
			datasets: [
				{
					label: '# of Votes',
					data,
					backgroundColor: ['#6B8E23', '#FCA4FF', '#8E96FF'],
					hoverOffset: 20,
					borderWidth: 0,
				},
			],
		}),
		[data],
	);

	return (
		<div className={styles.wrap}>
			<p className={styles.title}>{title}</p>

			<div className={styles.info}>
				<div style={{ width: '160px', height: '160px' }}>
					<Doughnut width={169} height={169} options={options} data={d as any} />
				</div>

				<div className={styles.labels}>
					{labels.map((label, i) => (
						<div key={label} className={styles.label}>
							<div className={styles[`color_${i + 1}`]} />

							<p>{label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DoughnutCard;
