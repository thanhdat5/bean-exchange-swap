import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IYourToken } from "../../types/token.model";
import { prefix } from "./constants";

export interface TokenState {
  tokens?: IYourToken[];
  loading: boolean;
  requestInfo: any;
}

const initialState: TokenState = {
  tokens: undefined,
  loading: false,
  requestInfo: undefined
};

// Actions
export const getTokensAct = createAction<any>(`${prefix}/get-tokens`);

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setLoadingState: (state: TokenState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateTokensState: (state: TokenState, action: PayloadAction<IYourToken[]>) => {
      state.tokens = action.payload;
    },
    setRequestInfoState: (state: TokenState, action: PayloadAction<any>) => {
      state.requestInfo = action.payload;
      state.loading = false;
    }
  }
});

export const { setLoadingState, updateTokensState, setRequestInfoState } =
  tokenSlice.actions;
export default tokenSlice.reducer;
