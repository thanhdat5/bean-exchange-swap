import { ENDPOINTS } from "constants/endpoints";
import axiosClient from "library/axios/axiosClient";
import { ResponseListGenerator } from "types/api/common-response.model";
import { IGetTokensRequest, IYourToken } from "types/token.model";

export const getTokens = (params: IGetTokensRequest) => {
	return axiosClient
		.post<ResponseListGenerator<IYourToken>>(ENDPOINTS.GET_TOKENS, params)
		.then(res => {
			return res.data;
		}) as ReturnType<typeof axiosClient.get<ResponseListGenerator<IYourToken>>>;
};
