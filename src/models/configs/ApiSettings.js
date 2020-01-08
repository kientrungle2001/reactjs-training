var apiSettings = {
	apiUrl: 'https://localhost:3001/api',
	version: 'v1',
	getUrl: function(resource) {
		return this.apiUrl + '/' + this.version + '/' + resource;
	},
	resources: {
		customer_login: 'customer/login'
	}
};
export default apiSettings;