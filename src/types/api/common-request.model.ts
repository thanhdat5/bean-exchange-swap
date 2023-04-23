export interface IListRequest {
	page: number;
	limit: number;
}
export interface UpdateRequestGenerator<T = any> {
	_id: string;
	data: T;
}
