/* eslint-disable indent */
import React, { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Wrapper from 'components/shared/wrapper/Wrapper';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';

import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';
import Bar from 'components/shared/Chart';
import ChartLabel from 'components/shared/chartLabel';
import LineLabel from 'components/shared/lineLabel';
import IsAuthWrapper from 'components/shared/IsAuthWrapper';
import styles from './styles.scss';

const mock_all_credits = [20000, 31000, 25000, 20000, 33000, 19000];
const mock_profit_credits = [14, 41234, 1234, 678365, 34, 1567];

const mock_alls_dep = [152, 1541, 25431, 1324, 12345, 1234];
const mock_profit_dep = [4325, 2323, 1234, 2354, 1234, 1234];

const mock_all_lis = [52, 524, 26178, 897, 1234, 1790];
const mock_profit_lis = [471, 178, 18234, 7184, 1790, 11];

const mock_all_other = [1079234, 57230, 235780, 1245709, 14507, 149781];
const mock_profit_other = [154, 435, 32, 654, 145, 135];

const Products = () => {
	const location = useLocation();

	const [typeOfChart, setTypeOfChart] = useState<'all' | 'profit'>('all');

	const data = useMemo(() => {
		if (location.pathname === '/products/credits') {
			switch (typeOfChart) {
				case 'all':
					return mock_all_credits;
				case 'profit':
					return mock_profit_credits;
				default:
					return [];
			}
		} else if (location.pathname === '/products/deposits') {
			switch (typeOfChart) {
				case 'all':
					return mock_alls_dep;
				case 'profit':
					return mock_profit_dep;
				default:
					return [];
			}
		} else if (location.pathname === '/products/leasing') {
			switch (typeOfChart) {
				case 'all':
					return mock_all_lis;
				case 'profit':
					return mock_profit_lis;
				default:
					return [];
			}
		}

		switch (typeOfChart) {
			case 'all':
				return mock_all_other;
			case 'profit':
				return mock_profit_other;
			default:
				return [];
		}
	}, [typeOfChart, location.pathname]);

	return (
		<IsAuthWrapper>
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
						<p
							onClick={() => setTypeOfChart('all')}
							className={styles[typeOfChart === 'all' ? 'chartTitle_active' : 'chartTitle']}
						>
							Все операции
						</p>
						<p
							onClick={() => setTypeOfChart('profit')}
							className={styles[typeOfChart === 'profit' ? 'chartTitle_active' : 'chartTitle']}
						>
							Прибыль
						</p>
					</div>

				<Bar _data={data} />
			</Wrapper>
				<div className={styles.blocks}>
					<ChartLabel num={1820000} progress={32} preNum={1000000} title="Доход от физ.лиц" />
					<ChartLabel num={1820000} progress={68} preNum={10000000} title="Доход от физ.лиц" />
					<LineLabel num={137} planNum={438} title="Доход от физ.лиц" />
					<ChartLabel num={1820000} progress={68} preNum={10000000} title="Операции физ.лиц" />
					<ChartLabel num={1820000} progress={32} preNum={1000000} title="Операции физ.лиц" />
					<LineLabel num={182} planNum={438} title="Доход от физ.лиц" />
				</div>

				<RightSidebar isViewCompareInfoBlock isViewInvestsComponents />
			</WrapperWithSidebar>
		</IsAuthWrapper>
	);
};

export default Products;
