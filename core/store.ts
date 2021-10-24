import BranchesStore from 'pages/branches/store';
import ClientsStore from 'pages/clients/store';
import AuthStore from 'pages/auth/store';
import ProductsStore from 'pages/products/store';
import UploadStore from 'pages/upload/store';

class RootStore {
	branchesStore: BranchesStore;

	clientsStore: ClientsStore;

	authStore: AuthStore;

	productsStore: ProductsStore;

	uploadStore: UploadStore;

	constructor() {
		this.branchesStore = new BranchesStore();
		this.clientsStore = new ClientsStore();
		this.authStore = new AuthStore();
		this.productsStore = new ProductsStore();
	}
}

export default RootStore;
