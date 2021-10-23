import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import LeftSidebar from 'components/shared/sidebars/LeftSidebar/LeftSidebar';
import Clients from 'pages/clients/Clients';
import Home from './home';

import style from '../core/styles/rootstyle.scss';

const Routes = () => (
	<div className={style.root}>
		<LeftSidebar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/clients/:id" component={Clients} />
		</Switch>
	</div>
);

export default Routes;
