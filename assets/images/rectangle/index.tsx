import React from 'react';

interface IProps {
	color: string;
}

const Rectangle = ({ color }: IProps) => (
	<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 0L15.7942 9.75H0.205771L8 0Z" fill={color} />
	</svg>
);

export default Rectangle;
