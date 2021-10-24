import { observable, action, makeAutoObservable, configure } from 'mobx';
import axios from 'axios';

configure({
	useProxies: 'never',
});

class BranchesStore {
	@observable isLoading = false;

	@observable clientsCircle: any = null;

	constructor() {
		makeAutoObservable(this);
	}

	@action setIsLoading() {
		this.isLoading = !this.isLoading;
	}

	@action async getClientsCircle(branch_id: string) {
		try {
			const { data } = await axios.get(`http://192.168.43.16:8888/clients/circle?branch_id=${branch_id}`);

			if (data) {
				this.clientsCircle = {
					is_legal_entity: data.filter((d: any) => d.is_legal_entity),
					other: data.filter((d: any) => !d.is_legal_entity),
				};
			}
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error('error', e.message);
		}
	}
}

export default BranchesStore;
