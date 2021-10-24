import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import Clients from 'pages/clients/Clients';
import Login from 'pages/auth/login/Login';
import Products from 'pages/products';
import Branches from 'pages/branches/Branches';
import NotFound from 'pages/notFound';
import Upload from 'pages/upload';

import LeftSidebar from 'components/shared/sidebars/LeftSidebar/LeftSidebar';

import style from '../core/styles/rootstyle.scss';

const Routes = () => {
	const { pathname } = useLocation();

	return (
		<div className={style.root}>
			{pathname !== '/auth' && pathname !== '/notFound' && <LeftSidebar />}
			<Switch>
				<Route exact path="/">
					<Redirect to="/auth" />
				</Route>
				<Route exact path="/users/:id" component={Clients} />
				<Route exact path="/products/:id" component={Products} />
				<Route exact path="/branches" component={Branches} />
				<Route exact path="/auth" component={Login} />
				<Route exact path="/files" component={Upload} />
				<Route exact path="*" component={NotFound} />
			</Switch>
		</div>
	);
};

export default Routes;
