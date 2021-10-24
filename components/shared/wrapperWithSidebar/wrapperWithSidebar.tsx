import React from 'react';

import style from './style.scss';

interface IProps {
	children: JSX.Element[] | JSX.Element;
}

const WrapperWithSidebar = ({ children }: IProps) => <div className={style.sidebar}>{children}</div>;

export default WrapperWithSidebar;
