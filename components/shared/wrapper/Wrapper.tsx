import React from 'react';
import cn from 'classnames';

import style from './style.scss';

interface IProps {
	className?: string;
	children: JSX.Element[] | JSX.Element;
}

const Wrapper = ({ children, className }: IProps) => <div className={cn(style.wrapper, className)}>{children}</div>;

export default Wrapper;
