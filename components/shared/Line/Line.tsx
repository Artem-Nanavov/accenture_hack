import React from 'react';
import { Line } from 'react-chartjs-2';

const CustomLine = () => {
	const data = {
		labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
		datasets: [
			{
				label: 'Прибыль',
				data: [12, 19, 3, 5, 2, 3, 12, 19, 3],
				fill: false,
				backgroundColor: '#74704E',
				borderColor: '#5C6142',
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};
	return <Line data={data as any} options={options} />;
};

export default CustomLine;