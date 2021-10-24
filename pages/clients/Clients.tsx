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


const Clients = observer(() => {
	const location = useLocation();
	const clientsStore = useClientsStore();

	const [typeOfChart, setTypeOfChart] = useState<'newClients' | 'profit' | 'operations'>('newClients');

	const data = useMemo(() => {
		if (location.pathname === '/clients/individuals') {
			switch (typeOfChart) {
				case 'newClients':
					return clientsStore.clientsGraphs.mock_newClients_fiz;
				case 'operations':
					return clientsStore.clientsGraphs.mock_countOfLeft_fiz;
				case 'profit':
					return clientsStore.clientsGraphs.mock_profit_fiz;
				default:
					return [];
			}
		}

		switch (typeOfChart) {
			case 'newClients':
				return clientsStore.clientsGraphs.mock_newClients_ur;
			case 'operations':
				return clientsStore.clientsGraphs.mock_countOfLeft_ur;
			case 'profit':
				return clientsStore.clientsGraphs.mock_profit_ur;
			default:
				return [];
		}
	}, [typeOfChart, location.pathname, clientsStore.clientsGraphs]);

	useEffect(() => {
		clientsStore.getClients();
		clientsStore.getClientsGraphs();
	}, []);

	return (
		<IsAuthWrapper>
			<WrapperWithSidebar>
				<Wrapper className={styles.wrap}>
					<div className={styles.header}>
						<NavLink activeClassName={styles.link_active} className={styles.link} to="/users/individuals">
							Физические лица
						</NavLink>

						<NavLink to="/users/legal" activeClassName={styles.link_active} className={styles.link}>
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
