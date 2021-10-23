import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthBackground from 'components/auth/AuthBackground';
import AuthInput from 'components/shared/Inputs/AuthInput';

import style from './style.scss';

interface IProps {
	setPath: (path: string) => void;
}

const Login = ({ setPath }: IProps) => {
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const hystory = useHistory();
	useEffect(() => {
		setPath('login');
	}, []);

	const handleSubmit = () => {
		hystory.push('/clients/individuals');
		setPath('');
	};

	return (
		<AuthBackground>
			<div className={style.formContainer}>
				<AuthInput type="string" value={login} onChange={setLogin} placeholder="Имя пользователя" />
				<AuthInput type="password" value={password} onChange={setPassword} placeholder="Пароль" />
				<button onClick={handleSubmit} className={style.submit}>Войти</button>
			</div>
		</AuthBackground>
	);
};

export default Login;