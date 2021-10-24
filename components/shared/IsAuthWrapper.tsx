import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface IProps {
	children: JSX.Element[] | JSX.Element | any;
}

const IsAuthWrapper = ({ children }: IProps) => {
	const history = useHistory();
	const { pathname } = useLocation();

	useEffect(() => {
		if (localStorage.getItem('isAuth') !== 'true' && pathname !== '/login') history.push('/auth');

		if (localStorage.getItem('isAuth') === 'true' && pathname === '/auth') history.push('/users/individuals');
	}, []);

	return children;
};

export default IsAuthWrapper;
