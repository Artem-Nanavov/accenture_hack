import React from 'react';

import Profile from 'components/shared/sidebars/Profile/Profile';
import CompareInfoBlock from 'components/shared/compareInfoBlock/CompareInfoBlock';

import InvestsComponents from 'components/shared/investsInfo';
import profile from '../../../../assets/images/png/profile.png';

import style from './style.scss';

const mockTestData = {
	header: 'Количество отделений',
	count: 1302,
	description: 'По сравнению с  178 млн в прошлом году',
	isPlus: true,
	percent: 10,
};

const RightSidebar = () => (
	<div className={style.rightSidebar}>
		<Profile image={profile} name="Валерия Кавасаки" />
		<CompareInfoBlock
			count={mockTestData.count}
			header={mockTestData.header}
			description={mockTestData.description}
			isPlus={mockTestData.isPlus}
			percent={mockTestData.percent}
		/>

		<InvestsComponents />
	</div>
);

export default RightSidebar;
