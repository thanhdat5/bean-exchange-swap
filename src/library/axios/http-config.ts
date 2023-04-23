export default class HttpConfig {
	public static BASE_URL =
		// 'http://localhost:3000';
		process.env.REACT_APP_API_URL
			? 'https://dev.gizedao.com'
			: 'https://dev.gizedao.com';
	public static DEFAULT_CONFIG = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
}
