import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import style from './style.scss';

interface IProps {
	data: string[];
}

const Select = ({ data }: IProps) => {
	const { path } = useRouteMatch();
	const handleChange = () => {
		console.log('==========>path', path);
	};

	return (
		<select onChange={handleChange} className={style.select} name="select">
			{data.map((element, index) => (
				<option key={index} value={element}>{element}</option>
			))}
		</select>
	);
};

export default Select;
