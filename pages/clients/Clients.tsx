import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Wrapper from 'components/shared/wrapper/Wrapper';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';
import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';
import HorChart from 'components/shared/HorChart';
import Table from 'components/shared/table/Table';

import DoughnutCard from 'components/shared/DoughnutCard';
import styles from './styles.scss';

const Clients = () => {
	const [typeOfChart, setTypeOfChart] = useState<'newClients' | 'profit' | 'operations'>('newClients');

	axios.get('http://127.20.10.3:8888/clients').then(data => {
		console.log('==========>data', data);
	})
		.catch(e => {
			console.log('==========>e', e)
		})

	return (
		<WrapperWithSidebar>
			<Wrapper className={styles.wrap}>
				<div className={styles.header}>
					<NavLink activeClassName={styles.link_active} className={styles.link} to="/clients/individuals">
						Физические лица
					</NavLink>

					<NavLink to="/clients/legal" activeClassName={styles.link_active} className={styles.link}>
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

				<HorChart />

				<Table className={styles.table} />
			</Wrapper>
			<RightSidebar />
		</WrapperWithSidebar>
	);
};

export default Clients;
