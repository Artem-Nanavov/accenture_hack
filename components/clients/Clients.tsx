import React from 'react';
import Wrapper from 'components/shared/wrapper/Wrapper';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';
import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';
import Table from 'components/shared/table/Table';
import InvestInfoGraph from 'components/shared/investsInfoGraph/InvestInfoGraph';

const Clients = () => (
	<WrapperWithSidebar>
		<Wrapper>
			<div>text</div>
			<Table />
			<InvestInfoGraph />
		</Wrapper>
		<RightSidebar />
	</WrapperWithSidebar>
);

export default Clients;
