import React from 'react';
import style from './style.scss';

interface IProps {
	children: JSX.Element[] | JSX.Element;
}

const Wrapper = ({ children }: IProps) => <div className={style.wrapper}>{children}</div>;

export default Wrapper;
