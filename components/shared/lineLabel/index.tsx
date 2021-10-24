import React from 'react';

import styles from './styles.scss';

interface ILineLabel {
	num: number;
	planNum: number;
	title: string;
}

const LineLabel = ({ title, planNum, num }: ILineLabel) => (
	<div className={styles.wrap}>
		<p className={styles.title}>{title}</p>

		<div className={styles.info}>
			<p className={styles.num}>{num}</p>

			<div className={styles.line}>
				<p className={styles.leftNum}>+{planNum - num}</p>

				<div className={styles.progress}>
					<div />
					<div style={{ width: (num * 100) / planNum }} />
				</div>
			</div>
		</div>
	</div>
);

export default LineLabel;
