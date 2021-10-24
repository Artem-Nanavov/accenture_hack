import BranchesStore from 'pages/branches/store';
import ClientsStore from 'pages/clients/store';

class RootStore {
	branchesStore: BranchesStore;

	clientsStore: ClientsStore;

	constructor() {
		this.branchesStore = new BranchesStore();
		this.clientsStore = new ClientsStore();
	}
}

export default RootStore;
