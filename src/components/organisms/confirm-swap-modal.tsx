import BeButton from "components/atoms/button"
import BeGroupInfo from "components/molecules/group-info";
import BeModal from "components/molecules/modal"
import BeTokenSwap from "components/molecules/token-swap";
import BeUpdated from "components/molecules/updated";
import styled from "styled-components"
import { ISwapInfo } from "types/swap.model";
import BeSwapIconButton from "../molecules/swap-icon-button";

type Props = {
    title: string;
    swapInfo: ISwapInfo;
    confirmButtonText: string;
    disabled?: boolean;
    onImport: () => void;
    onConfirm: () => void;
    onDissmiss: () => void;
}
const BeConfirmSwapModal = ({ title, swapInfo, disabled, confirmButtonText, onImport, onConfirm, onDissmiss }: Props) => {
    return <BeModal
        onDissmiss={onDissmiss}
        title={title}
    >
        <StyledConfirmSwap>
            <StyledSwapToken>
                <BeTokenSwap
                    name="Sui"
                    symbol="SUI"
                    value={20}
                    iconImage="https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png"
                />
                <BeSwapIconButton animation />
                <BeTokenSwap
                    name="Bean Exchange"
                    symbol="BEAN"
                    value={200}
                    iconImage="https://bean-exchange.vercel.app/favicon.ico"
                />
            </StyledSwapToken>
            {
                swapInfo.priceUpdated ?
                    <StyledPriceUpdated>
                        <BeUpdated
                            label="Price Updated"
                            buttonText="Import"
                            onButtonClick={onImport}
                        />
                    </StyledPriceUpdated> :
                    <></>
            }
            <BeGroupInfo
                label="Current Price"
                value={swapInfo.currentPrice}
            />
            <BeGroupInfo
                label="Minimum Received"
                value={swapInfo.minimumReceived}
            />
            <BeGroupInfo
                label="Gas Fee"
                value={swapInfo.gasFee}
            />
            <BeGroupInfo
                label="Price Impact"
                value={swapInfo.priceImpact}
            />
            <BeGroupInfo
                label="Max Slippage"
                value={swapInfo.maxSlippage}
            />
            <StyledButton>
                <BeButton
                    disabled={disabled}
                    caption={confirmButtonText}
                    width='100%'
                    onClick={onConfirm}
                />
            </StyledButton>
        </StyledConfirmSwap>
    </BeModal>
}
export default BeConfirmSwapModal
const StyledConfirmSwap = styled.div`
   
`
const StyledButton = styled.div`
    padding-top: 8px;
`
const StyledPriceUpdated = styled.div`
    margin-bottom:10px;
`
const StyledSwapToken = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    position: relative;
    padding-bottom: 16px;
    margin-bottom: 16px;
    &:after{
        content:'';
        width: calc(100% + 64px);
        height: 0.5px;
        position: absolute;
        left: -32px;
        background-color:#4E9AFD;
        bottom: 0;
    }
`