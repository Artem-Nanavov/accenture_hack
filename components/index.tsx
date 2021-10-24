import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import LeftSidebar from 'components/shared/sidebars/LeftSidebar/LeftSidebar';
import Clients from 'pages/clients/Clients';
import Login from 'pages/auth/login/Login';
import Products from 'pages/products';
import Branches from 'pages/branches/Branches';

import style from '../core/styles/rootstyle.scss';

const Routes = () => {
	const { pathname } = useLocation();

	return (
		<div className={style.root}>
			{pathname !== '/auth' && <LeftSidebar />}
			<Switch>
				<Route exact path="/">
					<Redirect to="/auth" />
				</Route>
				<Route exact path="/c/:id" component={Clients} />
				<Route exact path="/products/:id" component={Products} />
				<Route exact path="/branches" component={Branches} />
				<Route exact path="/auth">
					<Login />
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
