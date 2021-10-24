/* eslint-disable indent */
import React, { useState, useMemo, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useClientsStore } from 'core/RootStoreProvider';

import Wrapper from 'components/shared/wrapper/Wrapper';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';
import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';
import HorChart from 'components/shared/HorChart';
import Table from 'components/shared/table/Table';

import IsAuthWrapper from 'components/shared/IsAuthWrapper';
import styles from './styles.scss';

const mock_newClients_fiz = [20000, 31000, 25000, 20000, 33000, 19000];
const mock_profit_fiz = [14, 41234, 1234, 678365, 34, 1567];
const mock_countOfLeft_fiz = [1, 41, 23, 451, 3, 28];

const mock_newClients_ur = [152, 1541, 25431, 1324, 12345, 1234];
const mock_profit_ur = [4325, 2323, 1234, 2354, 1234, 1234];
const mock_countOfLeft_ur = [1231, 12, 23, 1235, 3, 763];

const Clients = observer(() => {
	const location = useLocation();
	const clientsStore = useClientsStore();

	const [typeOfChart, setTypeOfChart] = useState<'newClients' | 'profit' | 'operations'>('newClients');

	const data = useMemo(() => {
		if (location.pathname === '/clients/individuals') {
			switch (typeOfChart) {
				case 'newClients':
					return mock_newClients_fiz;
				case 'operations':
					return mock_countOfLeft_fiz;
				case 'profit':
					return mock_profit_fiz;
				default:
					return [];
			}
		}

		switch (typeOfChart) {
			case 'newClients':
				return mock_newClients_ur;
			case 'operations':
				return mock_countOfLeft_ur;
			case 'profit':
				return mock_profit_ur;
			default:
				return [];
		}
	}, [typeOfChart, location.pathname]);

	useEffect(() => {
		clientsStore.getClients();
	}, []);

	return (
		<IsAuthWrapper>
			<WrapperWithSidebar>
				<Wrapper className={styles.wrap}>
					<div className={styles.header}>
						<NavLink activeClassName={styles.link_active} className={styles.link} to="/c/individuals">
							Физические лица
						</NavLink>

						<NavLink to="/c/legal" activeClassName={styles.link_active} className={styles.link}>
							Юридические лица
						</NavLink>
					</div>

					<div className={styles.chartHeader}>
						<p
							onClick={() => setTypeOfChart('newClients')}
							className={styles[typeOfChart === 'newClients' ? 'chartTitle_active' : 'chartTitle']}
						>
							Новые клиенты
						</p>
						<p
							onClick={() => setTypeOfChart('profit')}
							className={styles[typeOfChart === 'profit' ? 'chartTitle_active' : 'chartTitle']}
						>
							Прибыль
						</p>
						<p
							onClick={() => setTypeOfChart('operations')}
							className={styles[typeOfChart === 'operations' ? 'chartTitle_active' : 'chartTitle']}
						>
							Операции
						</p>
					</div>

					<HorChart _data={data} />

					{clientsStore.clientsInfo && <Table className={styles.table} data={clientsStore.clientsInfo} />}
				</Wrapper>
				<RightSidebar isViewCompareInfoBlock isViewInvestsComponents />
			</WrapperWithSidebar>
		</IsAuthWrapper>
	);
});

export default Clients;
