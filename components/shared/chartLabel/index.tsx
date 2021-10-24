import React, { useMemo } from 'react';
import FormatNumber from 'core/utils/numberFormat';

import styles from './styles.scss';
import Indicator from '../indecator/Indecator';

interface IChartLabel {
	title: string;
	progress: number;
	num: number;
	preNum: number;
}

const ChartLabel = ({ title, progress, num, preNum }: IChartLabel) => {
	const maxValue = 100;
	const radius = 23;
	const dashArray = 2 * Math.PI * radius;
	const finalMaxValue = maxValue <= 0 ? 0 : maxValue;
	const finalProgress = progress > maxValue ? maxValue : progress;
	const offset = ((finalMaxValue - finalProgress) / maxValue) * dashArray;

	const precent = useMemo(() => {
		let n;

		if (preNum > num) {
			n = (num * 100) / preNum;
		} else {
			n = (preNum * 100) / num;
		}

		return n.toFixed();
	}, [num]);

	return (
		<div className={styles.wrap}>
			<div className={styles.chart}>
				<svg style={{ transform: 'rotate(270deg' }} className="RadialProgress" width={56} height={56}>
					<g>
						<linearGradient x1={0} x2={0} y1={0} y2={0} id="radial-progress-gradient">
							<stop offset="0%" stopColor="#E323FF" />
							<stop offset="100%" stopColor="#7517F8" />
						</linearGradient>
						<circle id="border" r={radius} cy={25} cx={25} strokeWidth={3} stroke="#05050F" fill="none" />
						<circle
							id="circle"
							className="circle-animation"
							r={radius}
							cy={25}
							cx={25}
							strokeWidth={5}
							stroke="url(#radial-progress-gradient)"
							fill="none"
							strokeDashoffset={offset}
							strokeDasharray={dashArray}
						/>
					</g>
				</svg>
			</div>

			<div style={{ marginLeft: '24px' }}>
				<p className={styles.title}>{title}</p>

				<div className={styles.info}>
					<p className={styles.num}>{FormatNumber(num)}</p>

					<div className={styles.df}>
						<Indicator isPlus={preNum < num} />
						<p className={styles[preNum < num ? 'plusNum' : 'minusNum']}>{precent}%</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartLabel;
