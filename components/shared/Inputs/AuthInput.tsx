import React, { ChangeEvent } from 'react';

import style from './style.scss';

interface IProps {
	type: string;
	value: string;
	onChange: (data: string) => void;
	placeholder: string;
}

const AuthInput = ({ type, value, onChange, placeholder }: IProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};
	return <input className={style.auth} type={type} value={value} onChange={handleChange} placeholder={placeholder} />;
};

export default AuthInput;
