import axios, { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';
import HttpConfig from 'library/axios/http-config';
import { errorInterceptor } from 'library/axios/http-error.interceptor';
import { responseInterceptor } from 'library/axios/http-response.interceptors';
import { useSetHttpContext } from 'providers/http-context';

export type ResponseMessage = {
	content?: string;
	field?: string;
	responseCode?: string;
};

export type HttpResponse<T> = {
	data: T | null;
	message: ResponseMessage;
};

const useHttpProvider = () => {
	const customAxios = axios.create({
		...HttpConfig.DEFAULT_CONFIG
	});

	const httpContext = useSetHttpContext();

	//request interceptor handler
	customAxios.interceptors.request.use(request => {
		httpContext(true);
		return request;
	});

	//response interceptor handler
	customAxios.interceptors.response.use(
		response => {
			httpContext(false);
			return responseInterceptor(response);
		},
		error => {
			httpContext(false);
			return errorInterceptor(error);
		}
	);

	const request = useCallback(
		<T>(config: AxiosRequestConfig): Promise<HttpResponse<T>> => {
			return customAxios.request({
				...config,
				url: `${HttpConfig.BASE_URL}api/${config.url}`
			});
		},
		[customAxios]
	);

	const get = useCallback(
		<T>(url: string): Promise<HttpResponse<T>> => {
			return request({
				method: 'GET',
				url
			});
		},
		[request]
	);

	const post = useCallback(
		<T>(url: string, data: any): Promise<HttpResponse<T>> => {
			return request({
				method: 'POST',
				data,
				url
			});
		},
		[request]
	);

	const put = useCallback(
		<T>(url: string, data: any): Promise<HttpResponse<T>> => {
			return request({
				method: 'PUT',
				data,
				url
			});
		},
		[request]
	);

	const deleted = useCallback(
		<T>(url: string): Promise<HttpResponse<T>> => {
			return request({
				method: 'DELETE',
				url
			});
		},
		[request]
	);

	return [{ get, post, put, deleted }];
};

export default useHttpProvider;
