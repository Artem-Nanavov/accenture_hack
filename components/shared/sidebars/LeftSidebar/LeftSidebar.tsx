import React from 'react';
import SidebarLine from 'components/shared/sidebars/LeftSidebar/SidebarLine';

import branch from '../../../../assets/images/svg/branch.svg';
import client from '../../../../assets/images/svg/client.svg';
import product from '../../../../assets/images/svg/product.svg';

import style from './style.scss';

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

const LeftSidebar = () => (
	<div className={style.sidebar}>
		<p className={style.title}>Your Buisness</p>
		{lines.map((e, index) => (
			<SidebarLine key={index} header={e.name} url={e.url} image={e.image} />
		))}
	</div>
);

export default LeftSidebar;
