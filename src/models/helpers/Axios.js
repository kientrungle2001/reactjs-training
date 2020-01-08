import Axios from 'axios';
export default class AxiosHelper {
	static get(url, config) {
		return Axios.get(url, config).then(AxiosHelper.handleSuccess).catch(AxiosHelper.handleError);
	}
	static post(url, config) {
		return Axios.post(url, config).then(AxiosHelper.handleSuccess).catch(AxiosHelper.handleError);
	}
	static handleSuccess(resp) {
		console.log('response on helper');
		console.log(resp);
	}
	static handleError(error) {
		console.log('error on helper');
		console.log(error);
	}
}