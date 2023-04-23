import { IFee } from './fee.model';
import { IToken } from './token.model';

export interface ISwapRequest {
	from: IToken;
	to: IToken;
}
export interface ISwapInfo {
	priceUpdated?: boolean;
	currentPrice: string;
	minimumReceived: string;
	gasFee: string;
	priceImpact: string;
	maxSlippage: string;
}

export interface ISwapMoreInfo {
	swappingThrough: string[];
	minimumReceived: string;
	priceImpact: string;
	addresses: string;
	swapFee: IFee;
}

export interface ISkip {
	value: number;
	label: string;
}