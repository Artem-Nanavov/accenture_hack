import { observable, action, makeAutoObservable, configure } from 'mobx';
import axios from 'axios';

configure({
	useProxies: 'never',
});

class ClientsStore {
	@observable isLoading = false;

	@observable clientsInfo: any = null;

	constructor() {
		makeAutoObservable(this);
	}

	@action setIsLoading() {
		this.isLoading = !this.isLoading;
	}

	@action async getClients() {
		try {
			const { data } = await axios.get('http://192.168.43.16:8888');

			this.clientsInfo = data;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error('error', e.message);
		}
	}
}

export default ClientsStore;
