import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useAuthStore } from 'core/RootStoreProvider';

import AuthBackground from 'pages/auth/AuthBackground';
import AuthInput from 'components/shared/Inputs/AuthInput';

import IsAuthWrapper from 'components/shared/IsAuthWrapper';
import style from './style.scss';

interface IProps {
	setPath: (path: string) => void;
}

const Login = observer(() => {
	const history = useHistory();
	const authStore = useAuthStore();

	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	useEffect(() => {
		if (authStore.isAuth) {
			history.push('/clients/individuals');
		}
	}, [authStore.isAuth]);

	const handleSubmit = () => {
		authStore.login(login, password);
	};

	return (
		<IsAuthWrapper>
			<AuthBackground>
				<div className={style.formContainer}>
					<AuthInput type="string" value={login} onChange={setLogin} placeholder="Имя пользователя" />
					<AuthInput type="password" value={password} onChange={setPassword} placeholder="Пароль" />
					<button type="button" onClick={handleSubmit} className={style.submit}>
						Войти
					</button>
				</div>
			</AuthBackground>
		</IsAuthWrapper>
	);
});

export default Login;
