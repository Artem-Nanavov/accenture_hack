import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
	labels: ['Июнь', 'Май', 'Апрель', 'Март', 'Февраль', 'Январь'],
	datasets: [
		{
			maxBarThickness: 8,
			data: [20000, 31000, 25000, 20000, 33000, 19000],
			backgroundColor: ['#AA40F6', '#224BFE', '#79B763', '#FCA4FF', '#8E96FF', '#6B8E23'],
			borderWidth: 0,
		},
	],
};

const options = {
	tension: 0.1,
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
		title: {
			display: false,
		},
	},
};

const Chart = () => <Bar data={data} options={options as any} />;

export default Chart;
