import React from 'react';
import SidebarLine from 'components/shared/sidebar/SidebarLine';
import style from './style.scss';

import branch from '../../../assets/images/png/branch.png';
import client from '../../../assets/images/png/client.png';
import product from '../../../assets/images/png/product.png';

const lines = [
	{
		name: 'Клиенты',
		url: 'clients',
		image: client,
	},
	{
		name: 'Продукты',
		url: 'products',
		image: product,
	},
	{
		name: 'Филлиалы',
		url: 'branches',
		image: branch,
	},
];

const Sidebar = () => (
	<div className={style.sidebar}>
		<p className={style.title}>Your Buisness</p>
		{lines.map((e) => (
			<SidebarLine header={e.name} url={e.url} image={e.image} />
		))}
	</div>
);

export default Sidebar;
