import React, { useState } from 'react';
import axios from 'axios';
import Wrapper from 'components/shared/wrapper/Wrapper';
import RightSidebar from 'components/shared/sidebars/RightSidebar/RightSidebar';
import WrapperWithSidebar from 'components/shared/wrapperWithSidebar/wrapperWithSidebar';
import Select from 'components/shared/Select/Select';
import CustomLine from 'components/shared/Line/Line';
import DescriptionContainer from 'components/shared/DescriptionContainer/DescriptionContainer';
import DoughnutCard from 'components/shared/DoughnutCard';

import style from './style.scss';

const data = ['г. Ростов-на-Дону, пер Куйбышевский, д. 122/30', 'г. Ростов-на-Дону, пер. Парусный д. 125', 'г. Ростов-на-Дону, ул. Портовая 212'];
const data2 = [144, 123, 3];
const data3 = [335, 141, 737];
const data4 = [124, 435, 12];
const labels = ['Кредиты', 'Ипотека', 'Средства клиентов'];
const labels2 = ['Перевыполнили', 'Выполнили', 'Не выполнили'];

const Branches = () => {
	const [isAll, setIsAll] = useState<boolean>(true);
	const [isIndividual, setIsIndividual] = useState<boolean>(true);
	return (
		<WrapperWithSidebar>
			<Wrapper>
				<div className={style.container}>
					<div className={style.selectLine}>
						<p onClick={() => setIsAll(true)} className={isAll ? style.headerLine : style.headerLineAll}>Общее</p>
						<p onClick={() => setIsAll(false)} className={isAll ? style.headerLineAll : style.headerLine}>Выбранный</p>
						{!isAll && <Select data={data} />}
					</div>
					<CustomLine />
					{isAll && <div className={style.descCont}>
						<DescriptionContainer isRating={false} header="Управляющий" description="Викторов Алексей Николаевич"/>
						<DescriptionContainer isRating={true} header="Рейтинг" description="1"/>
					</div>}
					<div className={style.graphCont}>
						<DoughnutCard changeOption={isIndividual} handleChange={setIsIndividual} isChoice={true} title="Физические лица" data={isIndividual ? data2 : data4} labels={labels} />
						<DoughnutCard isChoice={false} title="Выполнение плана" data={data3} labels={labels2} />
					</div>
				</div>
			</Wrapper>
			<RightSidebar />
		</WrapperWithSidebar>
	);
};

export default Branches;
