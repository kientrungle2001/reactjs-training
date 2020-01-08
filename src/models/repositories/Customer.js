import AxiosHelper from "../helpers/Axios";
import apiSettings from "../configs/ApiSettings";
var CustomerRepository = {
	login: function (username, password) {
		let { resources } = apiSettings;
		return AxiosHelper.post(apiSettings.getUrl(resources.customer_login), {
			username: username, password: password
		});
	}
}

export default CustomerRepository;