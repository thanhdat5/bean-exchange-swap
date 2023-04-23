import styled from "styled-components";
import { Collapse } from 'react-bootstrap';
import { useState } from "react";
import BeGroupMoreInfo from "components/molecules/group-more-info";
import { ISwapMoreInfo } from "types/swap.model";

type Props = {
    moreInfo: ISwapMoreInfo;
}
const BeSwapMoreInformation = ({
    moreInfo
}: Props) => {
    const [open, setOpen] = useState(true);

    return <StyledBlock>
        <StyledTitle>
            <StyledLabel onClick={() => setOpen(prev => !prev)}>More information</StyledLabel>
            <StyledIcon open={open}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5.5L0.669873 0.25L9.33013 0.250001L5 5.5Z" fill="#16264F" />
                </svg>
            </StyledIcon>
        </StyledTitle>
        <StyledCollapse in={open}>
            <StyledBody>
                <BeGroupMoreInfo label="Swapping Through" value={moreInfo.swappingThrough} helpText="Help" />
                <BeGroupMoreInfo label="Minimum Received" value={moreInfo.minimumReceived} helpText="Help" />
                <BeGroupMoreInfo label="Price Impact" value={moreInfo.priceImpact} helpText="Help" highlightValue />
                <BeGroupMoreInfo label="Addresses" value={moreInfo.addresses} helpText="Help" />
                <BeGroupMoreInfo label="Swap Fee" value={moreInfo.swapFee} helpText="Help" />
                <StyledIconBottom onClick={() => setOpen(false)}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0.5L9.33013 5.75L0.669873 5.75L5 0.5Z" fill="#4E9AFD" />
                    </svg>
                </StyledIconBottom>
            </StyledBody>
        </StyledCollapse>
    </StyledBlock>
}
export default BeSwapMoreInformation;
const StyledBlock = styled.div`

`
const StyledCollapse = styled(Collapse)`
    background: rgb(22 38 79 / 80%);
    border-radius: 10px;
    padding: 16px 24px 10px;
`
const StyledTitle = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #16264F;
    padding: 0;
    width: 100%;
    border: 0;
    outline: 0;
`
const StyledLabel = styled.div`
    display: inline-flex;
    margin-right: 3px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`
const StyledIcon = styled.div<{ open: boolean }>`
    width:10px;
    height:10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    transition: all ease-in-out .3s;
    transform: rotate(${props => props.open ? '0' : '-90deg'});
    margin-top: 2px;
`
const StyledBody = styled.div``

const StyledIconBottom = styled.button`
    padding:0;
    width:100%;
    border: 0;
    outline: 0;
    margin-top: 5px;
    background-color:transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`