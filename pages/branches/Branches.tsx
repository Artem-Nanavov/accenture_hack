import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useBranchesStore } from 'core/RootStoreProvider';

import Wrapper from 'components/shared/wrapper/Wrapper';
import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';
import Select from 'components/shared/Select/Select';
import CustomLine from 'components/shared/Line/Line';
import DescriptionContainer from 'components/shared/DescriptionContainer/DescriptionContainer';
import DoughnutCard from 'components/shared/DoughnutCard';

import IsAuthWrapper from 'components/shared/IsAuthWrapper';
import style from './style.scss';

const data = ['г. Ростов-на-Дону, пер Куйбышевский, д. 122/30'];
const labels = ['Кредиты', 'Средства клиентов', 'Ипотека'];
const labels2 = ['Перевыполнили', 'Выполнили', 'Не выполнили'];

const Branches = observer(() => {
	const branchesStore = useBranchesStore();

	const [isAll, setIsAll] = useState<boolean>(true);
	const [isIndividual, setIsIndividual] = useState<boolean>(true);

	useEffect(() => {
		branchesStore.getClientsCircle('1');
		branchesStore.getPlanData();
	}, []);

	console.log(toJS(branchesStore));

	return (
		<IsAuthWrapper>
			<WrapperWithSidebar>
				<Wrapper>
					<div className={style.container}>
						<div className={style.selectLine}>
							<p onClick={() => setIsAll(true)} className={isAll ? style.headerLine : style.headerLineAll}>
								Общее
							</p>
							<p onClick={() => setIsAll(false)} className={isAll ? style.headerLineAll : style.headerLine}>
								Выбранный
							</p>
						</div>
						{!isAll && <Select data={data} />}
						<CustomLine />
						{!isAll && (
							<div className={style.descCont}>
								<DescriptionContainer isRating={false} header="Управляющий" description="Викторов Алексей Николаевич" />
								<DescriptionContainer isRating header="Рейтинг" description="1" />
							</div>
						)}
					</div>
				</Wrapper>
				<div className={style.graphCont}>
					{branchesStore.clientsCircle && (
						<>
							<DoughnutCard
								changeOption={isIndividual}
								handleChange={setIsIndividual}
								isChoice={!isAll}
								title="Физические лица"
								data={isIndividual ? branchesStore.clientsCircle.other : branchesStore.clientsCircle.is_legal_entity}
								labels={labels}
							/>

							{!isAll ? (
								<DoughnutCard
									isChoice={false}
									title="Выполнение плана"
									changeColor
									// @ts-ignore
									data={Object.values(branchesStore.planData).map((v) => ({ count: v }))}
									labels={labels2}
								/>
							) : (
								<DoughnutCard
									isChoice={false}
									title="Юридические лица"
									data={branchesStore.clientsCircle.is_legal_entity}
									labels={labels}
								/>
							)}
						</>
					)}
				</div>
				<RightSidebar />
			</WrapperWithSidebar>
		</IsAuthWrapper>
	);
});

export default Branches;
