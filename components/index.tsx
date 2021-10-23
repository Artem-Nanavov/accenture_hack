import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from 'components/shared/sidebar/Sidebar';
import Home from './home';

import style from '../core/styles/rootstyle.scss';

const Routes = () => (
	<div className={style.root}>
		<Sidebar />
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</div>
);

export default Routes;
