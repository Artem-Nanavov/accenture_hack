import React from 'react';

import styles from './styles.scss';

const NotFound = () => (
	<div className={styles.wrap}>
		<div>
			<p className={styles.title}>404</p>

			<p className={styles.subTitle}>Страница не найдена</p>
		</div>
	</div>
);

export default NotFound;
