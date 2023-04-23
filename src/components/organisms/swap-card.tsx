import BeCircleImage from "components/atoms/circle-image";
import BeSelectTokenButton from "components/molecules/token-button";
import styled from "styled-components";
import { IYourToken } from "types/token.model";

type Props = {
    labelLeft: string;
    labelRight: string;
    token: IYourToken;
    buttonText?: string;
    priceTrend: string;
    value: number;
    readOnly?: boolean;
    onButtonClick?: () => void;
    onValueChange?: (value: number) => void;
    onTokenSelect: () => void;
}
const BeSwapCard = ({
    labelLeft,
    labelRight,
    token,
    buttonText,
    priceTrend,
    value,
    readOnly = false,
    onButtonClick,
    onValueChange,
    onTokenSelect
}: Props) => {
    return <StyledCard>
        <StyledCardHeader>
            <StyledLabel>{labelLeft}</StyledLabel>
            <StyledLabel>{labelRight}</StyledLabel>
            <StyledValue>{token.balance}</StyledValue>
            {buttonText ? <StyledButton type="button" onClick={onButtonClick}>{buttonText}</StyledButton> : <></>}
        </StyledCardHeader>
        <StyledCardBody>
            <BeSelectTokenButton
                icon={
                    <BeCircleImage
                        image={token.logo}
                        alt={token.symbol}
                        title={token.name}
                        size={24}
                    />
                }
                symbol={token.symbol}
                onClick={onTokenSelect}
            />
            <StyledInput
                type="number"
                readOnly={readOnly}
                value={value}
                onChange={e => onValueChange ? onValueChange(Number(e.target.value)) : 0}
            />
        </StyledCardBody>
        <StyledCardFooter>{priceTrend}</StyledCardFooter>
    </StyledCard>
}
export default BeSwapCard;
const StyledCard = styled.div`
    background-color: #16264F;
    border-radius: 10px;
    padding:12px 24px;
`
const StyledCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
`
const StyledLabel = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #4E9AFD;
    margin-left:auto;
    &:first-child{
        margin-left: 0;
    }
`
const StyledValue = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
`
const StyledButton = styled.button`
    margin-left:12px;
    border:0;
    padding: 2px 9px 3px;
    background-color: #45D06C;
    box-shadow: inset 0px 2.88px 2.88px rgba(0, 0, 0, 0.25);
    border-radius: 2.88px;
    transition:all ease-in-out .3s;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    &:disabled{
        opacity: 0.5;
    }
    &:not(:disabled){
        &:hover{
            background-color: rgb(69 208 108 / 70%);
        }
    }
`
const StyledCardBody = styled.div`
    margin-bottom: 4px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const StyledCardFooter = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: #FFFFFF;
`
const StyledInput = styled.input`
    font-weight: 600;
    font-size: 30px;
    text-align: right;
    color: #FFFFFF;
    margin-left: auto;
    height: 42px;
    display: inline-flex;
    align-items:center;
    justify-content: flex-end;
    background-color:transparent;
    border:0;
    outline: 0;
    width: calc(100% - 150px);
    padding-right: 0;
    -moz-appearance:textfield; /* Firefox */
    &:readonly{
        cursor: not-allowed;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
`