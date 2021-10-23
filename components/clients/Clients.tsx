import React from 'react';
import Wrapper from 'components/shared/wrapper/Wrapper';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';
import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';

const Clients = () => (
	<WrapperWithSidebar>
		<Wrapper>
			<div>text</div>
		</Wrapper>
		<RightSidebar />
	</WrapperWithSidebar>
);

export default Clients;
