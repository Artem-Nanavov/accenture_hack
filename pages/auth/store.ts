import { observable, action, makeAutoObservable, configure } from 'mobx';
import axios from 'axios';

configure({
	useProxies: 'never',
});

class AuthStore {
	@observable isLoading = false;

	@observable isAuth: any = false;

	constructor() {
		makeAutoObservable(this);
	}

	@action setIsLoading() {
		this.isLoading = !this.isLoading;
	}

	@action async login(email: string, password: string) {
		try {
			this.isLoading = true;

			await axios.post('/login', { email, password }, { withCredentials: true });

			this.isAuth = true;
			localStorage.setItem('isAuth', 'true');
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error('error', e.message);
		} finally {
			this.isLoading = false;
		}
	}
}

export default AuthStore;
