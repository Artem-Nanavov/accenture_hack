import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LeftSidebar from 'components/shared/sidebars/LeftSidebar/LeftSidebar';
import Clients from 'pages/clients/Clients';
import Login from 'components/auth/login/Login';
import Home from './home';

import style from '../core/styles/rootstyle.scss';

const Routes = () => {
	const [path, setPath] = useState<string>('');
	return (
		<div className={style.root}>
			{path !== 'login' && <LeftSidebar />}
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/clients/:id" component={Clients} />
				<Route exact path="/login">
					<Login setPath={setPath} />
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
