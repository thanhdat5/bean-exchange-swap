export interface ResponseGenerator<T = any> {
	config?: any;
	data?: T;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
}

export type RequestListGenerator<T = unknown> = T & {
	[key: string]: any;
	start?: number;
	length?: number;
};

export type ResponseListGenerator<T = any, K extends string = 'records'> = {
	total: number;
} & RequestListGenerator &
	Record<K, T[]>;

export type ResponseStatus<T = any, K extends string = 'data'> = {
	success: boolean;
	errorMessage: string;
} & RequestListGenerator &
	Record<K, T[]>;
