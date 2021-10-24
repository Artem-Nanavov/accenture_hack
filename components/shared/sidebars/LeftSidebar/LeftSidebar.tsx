import React from 'react';
import SidebarLine from 'components/shared/sidebars/LeftSidebar/SidebarLine';

import branch from '../../../../assets/images/png/branch.png';
import client from '../../../../assets/images/png/client.png';
import product from '../../../../assets/images/png/product.png';

import style from './style.scss';

const lines = [
	{
		name: 'Клиенты',
		cur: 'clients',
		url: '/clients/individuals',
		image: client,
	},
	{
		name: 'Продукты',
		cur: 'products',
		url: '/products/credits',
		image: product,
	},
	{
		name: 'Филлиалы',
		cur: 'branches',
		url: '/branches',
		image: branch,
	},
];

const LeftSidebar = () => (
	<div className={style.sidebar}>
		<p className={style.title}>Your Buisness</p>
		{lines.map((e, index) => (
			<SidebarLine cur={e.cur} key={index} header={e.name} url={e.url} image={e.image} />
		))}
	</div>
);

export default LeftSidebar;
