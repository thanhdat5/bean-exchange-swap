import BeButton from "components/atoms/button";
import BeIcSwapSetting from "components/atoms/icons/icon-swap-setting";
import BeSwapCard from "components/organisms/swap-card";
import { SWAP_MORE_INFO } from "constants/data";
import { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import styled from "styled-components";
import { IYourToken } from "types/token.model";
import BeSwapChart from "./components/chart";
import BeSwapHeader from "./components/header";
import BeSwapMoreInformation from "./components/more-information";

type Props = {
    skip: number;
    fromToken: IYourToken,
    toToken: IYourToken,
    fee: number;
    valueSwap: number;
    valueReceive: number;
    exchangeRate: number;
    onMaxClick?: () => void;
    onValueChange?: (value: number) => void;
    onTokenSelect: (isFrom: boolean) => void;
    onSwap: () => void;
    onSetting: () => void;
}
const BeSwapTemplate = ({
    skip,
    fromToken,
    toToken,
    fee,
    valueSwap,
    valueReceive,
    exchangeRate,
    onMaxClick,
    onValueChange,
    onTokenSelect,
    onSwap,
    onSetting,
}: Props) => {
    const [selectedTab, setSelectedTab] = useState(1);
    return <StyledSwap>
        <BeSwapHeader />
        <Row>
            <Col xl="4" md="5">
                <StyledHeader>
                    <StyledTab type="button" active={selectedTab === 1} onClick={() => setSelectedTab(1)}>Swap</StyledTab>
                    <StyledTab type="button" active={selectedTab === 2} onClick={() => setSelectedTab(2)}>Limit</StyledTab>
                    <StyledSetting>
                        Slip {skip}%
                        <StyledSettingIcon type="button" onClick={onSetting}>
                            <BeIcSwapSetting />
                        </StyledSettingIcon>
                    </StyledSetting>
                </StyledHeader>
                <BeSwapCard
                    labelLeft="You sell"
                    labelRight="Balance :"
                    token={fromToken}
                    buttonText={fromToken.balance ? "MAX" : ""}
                    onButtonClick={onMaxClick}
                    value={valueSwap}
                    onValueChange={onValueChange}
                    priceTrend={fromToken.priceTrend}
                    onTokenSelect={() => onTokenSelect(true)}
                />

                <StyledBreak>
                    <StyledButtonIcon>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1V11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.25 6.25L7 11.5L1.75 6.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </StyledButtonIcon>
                    <StyledBreakText>1 {fromToken.symbol} = {exchangeRate} {toToken.symbol}</StyledBreakText>
                    <StyledBreakInfo>
                        ${fee}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00004 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8.00001C14.6667 4.33334 11.6667 1.33334 8.00004 1.33334C4.33337 1.33334 1.33337 4.33334 1.33337 8.00001C1.33337 11.6667 4.33337 14.6667 8.00004 14.6667ZM7.33337 4.66668H8.66671V6.00001H7.33337V4.66668ZM9.33337 11.3333H6.66671V10H7.33337V8.66668H6.66671V7.33334H8.66671V10H9.33337V11.3333Z" fill="#16264F" />
                        </svg>
                    </StyledBreakInfo>
                </StyledBreak>

                <BeSwapCard
                    labelLeft="You buy"
                    labelRight="Balance :"
                    token={toToken}
                    value={valueReceive}
                    readOnly
                    priceTrend={toToken.priceTrend}
                    onTokenSelect={() => onTokenSelect(false)}
                />

                <StyledButton>
                    <BeButton
                        disabled={
                            fromToken.symbol === toToken.symbol ||
                            fromToken.balance <= 0 ||
                            valueReceive <= 0
                        }
                        width="100%"
                        height={42}
                        onClick={onSwap}
                        caption="Swap"
                    />
                </StyledButton>
                <BeSwapMoreInformation moreInfo={SWAP_MORE_INFO} />
            </Col>
            <Col xl="8" md="7">
                <BeSwapChart />
            </Col>
        </Row>
    </StyledSwap>
}
export default BeSwapTemplate

const StyledSwap = styled.div`
    padding: 40px 0;
`
const StyledHeader = styled.div`
    display:flex;
    align-items:center;
    gap:18px;
    margin-bottom:10px;
`
const StyledTab = styled.button<{ active?: boolean }>`
    border:0;
    padding:0;
    background-color:transparent;
    outline:0;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    transition:all ease-in-out .3s;
    color: ${props => props.active ? '#4E9AFD' : '#16264F'};
`
const StyledSetting = styled.div`
    margin-left: auto;
    display: inline-flex;
    align-items:center;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #16264F;
`
const StyledSettingIcon = styled.button`
    border:0;
    padding:0;
    background-color:transparent;
    outline:0;
    margin-left:10px;
`
const StyledButton = styled.div`
    margin: 10px 0;
    button{
        font-size:16px;
        line-height:20px;
    }
`
const StyledBreak = styled.div`
    padding:8px 32px;
    display:flex;
    align-items:center;
`
const StyledButtonIcon = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #4E9AFD;
    transition:all ease-in-out .3s;
    border:0;
    &:disabled{
        opacity: 0.5;
    }
    &:not(:disabled){
        &:hover{
            background-color: rgb(78 154 253 / 70%);
        }
    }
`
const StyledBreakText = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #16264F;
    margin-left:12px;
`
const StyledBreakInfo = styled.div`
    display: inline-flex;
    align-items: center;
    margin-left: auto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #16264F;
    opacity: 0.5;
    svg{
        margin-left:4px;
    }
`