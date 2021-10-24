import { observable, action, makeAutoObservable, configure } from 'mobx';
import axios from 'axios';

configure({
	useProxies: 'never',
});

class UploadStore {
	@observable isLoading = false;

	@observable uploadedFiles: any[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	@action setIsLoading() {
		this.isLoading = !this.isLoading;
	}

	@action async upload(file: any) {
		this.uploadedFiles.push(file);
	}
}

export default UploadStore;
