import { observable, action, makeAutoObservable, configure } from 'mobx';
import axios from 'axios';

configure({
	useProxies: 'never',
});

class ProductsStore {
	@observable isLoading = false;

	@observable productsGraph: any = {
		mock_all_credits: [],
		mock_all_lis: [],
		mock_all_other: [],
		mock_alls_dep: [],
		mock_profit_credits: [],
		mock_profit_dep: [],
		mock_profit_lis: [],
		mock_profit_other: [],
	};

	constructor() {
		makeAutoObservable(this);
	}

	@action setIsLoading() {
		this.isLoading = !this.isLoading;
	}

	@action async getProducts() {
		try {
			const { data } = await axios.get('/products-graph');

			this.productsGraph = data;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error('error', e.message);
		}
	}
}

export default ProductsStore;