import { ISkip, ISwapInfo, ISwapMoreInfo } from 'types/swap.model';
import { IYourToken, IToken } from 'types/token.model';

export const YOUR_TOKEN_LIST: IYourToken[] = [
	{
		logo: 'https://i.ibb.co/zVB6KTN/bean.png',
		name: 'Bean Exchange',
		symbol: 'BEAN',
		balance: 20.32,
		usdBalance: 200.14,
		priceTrend: '~$1.137',
		address: '0xdAD71b01A389FC19357699C763A85FB76Aa9DCCC'
	},
	{
		logo: 'https://i.ibb.co/6BqXsrH/sui.png',
		name: 'Sui',
		symbol: 'SUI',
		balance: 20.32,
		usdBalance: 200.14,
		priceTrend: '~$1.136',
		address: '0xdAD71b01A389FC19357699C763A85FB76Aa9DCCC'
	},
	{
		logo: 'https://i.ibb.co/MZcNWsn/hrt.png',
		name: 'Hero Book',
		symbol: 'HRT',
		balance: 20.32,
		usdBalance: 200.14,
		priceTrend: '~$1.136',
		address: '0xdAD71b01A389FC19357699C763A85FB76Aa9DCCC'
	}
];
export const ADD_TOKEN_LIST: IToken[] = [
	{
		logo: 'https://bean-exchange.vercel.app/favicon.ico',
		name: 'Hero Book',
		symbol: 'HRT'
	},
	{
		logo: 'https://bean-exchange.vercel.app/favicon.ico',
		name: 'Hero Book',
		symbol: 'HRT'
	}
];
export const SLIPAGE_TOLERANCE_LIST: ISkip[] = [
	{ value: 0.5, label: '0.5%' },
	{ value: 1, label: '1%' },
	{ value: 2, label: '2%' }
];
export const SWAP_INFO: ISwapInfo = {
	currentPrice: '1 SUI = 10 BEAN',
	minimumReceived: '200 BEAN',
	gasFee: '$0,01',
	priceImpact: '< 0,01%',
	maxSlippage: '0,05%',
	priceUpdated: true
};
export const SWAP_MORE_INFO: ISwapMoreInfo = {
	swappingThrough: ['SUI', 'USDT', 'BEAN'],
	minimumReceived: '0,14257 BEAN',
	priceImpact: '<0.1%',
	addresses: 'Swapping Through',
	swapFee: {
		bean: '0.12 BEAN',
		usdt: '0.1812 USDT'
	}
};
