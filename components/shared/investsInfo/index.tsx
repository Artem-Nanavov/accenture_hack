import React from 'react';

import Rectangle from 'assets/images/rectangle';
import FormatNumber from 'core/utils/numberFormat';

import styles from './styles.scss';

const InvestsComponents = () => (
	<div className={styles.wrap}>
		<div className={styles.col}>
			<div className={styles.col1}>
				<p className={styles.text}>Депозиты</p>

				<p className={styles.text_color}>{FormatNumber(1023)}</p>
			</div>

			<div className={styles.col2}>
				<p className={styles.text}>{FormatNumber(2354333)}</p>

				<div style={{ transform: false ? 'rotate(180deg)' : '' }}>
					<Rectangle color={!false ? '#6B8E23' : '#E4514D'} />
				</div>
			</div>
		</div>

		<div className={styles.col}>
			<div className={styles.col1}>
				<p className={styles.text}>Кредиты</p>

				<p className={styles.text_color}>{FormatNumber(2023)}</p>
			</div>

			<div className={styles.col2}>
				<p className={styles.text}>{FormatNumber(1453333)}</p>

				<div style={{ transform: true ? 'rotate(180deg)' : '' }}>
					<Rectangle color={!true ? '#6B8E23' : '#E4514D'} />
				</div>
			</div>
		</div>

		<div className={styles.col}>
			<div className={styles.col1}>
				<p className={styles.text}>Др. металлы</p>

				<p className={styles.text_color}>{FormatNumber(853)}</p>
			</div>

			<div className={styles.col2}>
				<p className={styles.text}>{FormatNumber(1003000)}</p>

				<div style={{ transform: true ? 'rotate(180deg)' : '' }}>
					<Rectangle color={!true ? '#6B8E23' : '#E4514D'} />
				</div>
			</div>
		</div>

		<div className={styles.col}>
			<div className={styles.col1}>
				<p className={styles.text}>Инвестиции</p>

				<p className={styles.text_color}>{FormatNumber(3054)}</p>
			</div>

			<div className={styles.col2}>
				<p className={styles.text}>{FormatNumber(9344333)}</p>

				<div style={{ transform: false ? 'rotate(180deg)' : '' }}>
					<Rectangle color={!false ? '#6B8E23' : '#E4514D'} />
				</div>
			</div>
		</div>
	</div>
);

export default InvestsComponents;
