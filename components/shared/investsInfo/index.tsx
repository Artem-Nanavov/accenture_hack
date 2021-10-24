import React from 'react';

import Indicator from 'components/shared/indecator/Indecator';
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
				<Indicator isPlus={false} />
			</div>
		</div>

		<div className={styles.col}>
			<div className={styles.col1}>
				<p className={styles.text}>Кредиты</p>

				<p className={styles.text_color}>{FormatNumber(2023)}</p>
			</div>

			<div className={styles.col2}>
				<p className={styles.text}>{FormatNumber(1453333)}</p>

				<Indicator isPlus={true} />
			</div>
		</div>

		<div className={styles.col}>
			<div className={styles.col1}>
				<p className={styles.text}>Др. металлы</p>

				<p className={styles.text_color}>{FormatNumber(853)}</p>
			</div>

			<div className={styles.col2}>
				<p className={styles.text}>{FormatNumber(1003000)}</p>

				<Indicator isPlus={false} />
			</div>
		</div>

		<div className={styles.col}>
			<div className={styles.col1}>
				<p className={styles.text}>Инвестиции</p>

				<p className={styles.text_color}>{FormatNumber(3054)}</p>
			</div>

			<div className={styles.col2}>
				<p className={styles.text}>{FormatNumber(9344333)}</p>

				<Indicator isPlus={true} />
			</div>
		</div>
	</div>
);

export default InvestsComponents;
