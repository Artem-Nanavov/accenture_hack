import numeral from 'numeral';

const FormatNumber = (num: number) => {
	if (num >= 1000000) return numeral(num).format('(0.000 a)');

	return numeral(num).format('(0,0)');
};

export default FormatNumber;
