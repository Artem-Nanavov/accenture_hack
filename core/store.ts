import BranchesStore from 'pages/branches/store';

class RootStore {
	branchesStore: BranchesStore;

	constructor() {
		this.branchesStore = new BranchesStore();
	}
}

export default RootStore;
