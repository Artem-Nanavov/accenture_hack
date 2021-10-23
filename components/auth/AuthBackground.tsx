import React from 'react';

import Ball from 'assets/images/authIcons/Ball';
import GroupBalls from 'assets/images/authIcons/GroupBalls';

import style from './style.scss';

interface IProps {
	children: JSX.Element[] | JSX.Element;
}

const AuthBackground = ({ children }: IProps) => (
	<div className={style.authBackground}>
		<div className={style.ball}>
			<Ball />
		</div>
		<div className={style.groupBalls}>
			<GroupBalls />
		</div>
		{children}
	</div>
);

export default AuthBackground;
