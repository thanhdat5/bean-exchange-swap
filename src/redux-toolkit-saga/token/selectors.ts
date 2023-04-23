import { RootState } from "store/store";

export const tokenLoadingSelector = (state: RootState) => state.token.loading;
export const tokensSelector = (state: RootState) => state.token.tokens;
export const tokenRequestInfoSelector = (state: RootState) => state.token.requestInfo;