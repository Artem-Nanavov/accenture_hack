import { observable, action, makeAutoObservable, configure } from 'mobx';
import axios from 'axios';

configure({
	useProxies: 'never',
});

class ClientsStore {
	@observable isLoading = false;

	@observable clientsInfo: any = null;

	@observable clientsGraphs: any = {
		mock_countOfLeft_fiz: [],
		mock_countOfLeft_ur: [],
		mock_newClients_fiz: [],
		mock_newClients_ur: [],
		mock_profit_fiz: [],
		mock_profit_ur: [],
	};

	constructor() {
		makeAutoObservable(this);
	}

	@action setIsLoading() {
		this.isLoading = !this.isLoading;
	}

	@action async getClients() {
		try {
			const { data } = await axios.get('/clients');

			this.clientsInfo = data;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error('error', e.message);
		}
	}

	@action async getClientsGraphs() {
		try {
			const { data } = await axios.get('/clients-graph');
			this.clientsGraphs = data;
		} catch (e) {
			console.error('error', e.message);
		}
	}
}

export default ClientsStore;
