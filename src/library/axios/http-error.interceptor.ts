import { AxiosError } from 'axios';

/**
 * Any status codes that falls outside the range of 2xx cause this function to trigger
 *
 * @param error {@link AxiosError}
 * @param callback handle error
 */
export const errorInterceptor = (error: AxiosError) => {
	if (error.response?.status) {
		if (error.response?.status === 500) {
			const errorResponse = error.response?.data as { error: string };
			return Promise.reject(new Error(String(errorResponse.error)));
		} else if (error.response?.status === 404) {
			return Promise.reject(new Error(String(error.message)));
		} else {
			console.log(error);
			return Promise.reject(new Error(String(error.message)));
		}
	}
	return Promise.reject(error);
};
