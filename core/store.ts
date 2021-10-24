import BranchesStore from 'pages/branches/store';
import ClientsStore from 'pages/clients/store';
import AuthStore from 'pages/auth/store';

class RootStore {
	branchesStore: BranchesStore;

	clientsStore: ClientsStore;

	authStore: AuthStore;

	constructor() {
		this.branchesStore = new BranchesStore();
		this.clientsStore = new ClientsStore();
		this.authStore = new AuthStore();
	}
}

export default RootStore;
