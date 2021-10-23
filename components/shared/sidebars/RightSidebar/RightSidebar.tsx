import React from 'react';

import Profile from 'components/shared/sidebars/Profile/Profile';
import CompareInfoBlock from 'components/shared/compareInfoBlock/CompareInfoBlock';

import profile from '../../../../assets/images/svg/profile.svg';

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
	</div>
);

export default RightSidebar;
