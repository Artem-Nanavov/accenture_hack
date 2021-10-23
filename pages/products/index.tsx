import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from 'components/shared/wrapper/Wrapper';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';

import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';
import Bar from 'components/shared/Chart';
import ChartLabel from 'components/shared/chartLabel';
import LineLabel from 'components/shared/lineLabel';
import styles from './styles.scss';

const Products = () => {
	const [typeOfChart, setTypeOfChart] = useState<'all' | 'profit'>('all');
	return (
		<WrapperWithSidebar>
			<Wrapper className={styles.wrap}>
				<div className={styles.header}>
					<NavLink activeClassName={styles.link_active} className={styles.link} to="/products/credits">
						Кредиты
					</NavLink>

					<NavLink to="/products/deposits" activeClassName={styles.link_active} className={styles.link}>
						Депозиты
					</NavLink>

					<NavLink activeClassName={styles.link_active} className={styles.link} to="/products/leasing">
						Лизинг
					</NavLink>

					<NavLink to="/products/other" activeClassName={styles.link_active} className={styles.link}>
						Прочее
					</NavLink>
				</div>

				<div className={styles.chartHeader}>
					<p onClick={() => setTypeOfChart('all')} className={styles[typeOfChart === 'all' ? 'chartTitle_active' : 'chartTitle']}>
						Все операции
					</p>
					<p
						onClick={() => setTypeOfChart('profit')}
						className={styles[typeOfChart === 'profit' ? 'chartTitle_active' : 'chartTitle']}
					>
						Прибыль
					</p>
				</div>

				<Bar />

				<div className={styles.blocks}>
					<ChartLabel num={1820000} progress={32} preNum={1000000} title="Доход от физ.лиц" />
					<ChartLabel num={1820000} progress={68} preNum={10000000} title="Доход от физ.лиц" />
					<LineLabel num={137} planNum={438} title="Доход от физ.лиц" />
					<ChartLabel num={1820000} progress={68} preNum={10000000} title="Операции физ.лиц" />
					<ChartLabel num={1820000} progress={32} preNum={1000000} title="Операции физ.лиц" />
					<LineLabel num={182} planNum={438} title="Доход от физ.лиц" />
				</div>
			</Wrapper>

			<RightSidebar isViewCompareInfoBlock isViewInvestsComponents />
		</WrapperWithSidebar>
	);
};

export default Products;
