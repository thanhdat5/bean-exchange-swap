import BeIcInfo from "components/atoms/icons/icon-info";
import styled from "styled-components"
import { IFee } from "types/fee.model";

type Props = {
    label: string;
    helpText?: string;
    value: string | string[] | IFee;
    highlightValue?: boolean;
}
const BeGroupMoreInfo = ({
    label,
    helpText,
    value,
    highlightValue = false
}: Props) => {
    return <StyledGroup>
        <StyledLabel>
            {label}
            {helpText ? <StyledIcon title={helpText}>
                <BeIcInfo />
            </StyledIcon> : <></>}
        </StyledLabel>
        <StyledValue highlightValue={highlightValue}>
            {
                typeof (value) === 'string' ? value :
                    Array.isArray(value) ? <StyledSymbolWrap>
                        {(value as string[]).map((item, idx) => (
                            idx === 0 ? <StyledItem key={idx}>{item}</StyledItem> :
                                <StyledItem key={idx}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 9.5V6.5H1V5.5H5.5V2.5L11 6L5.5 9.5Z" fill="white" />
                                    </svg>
                                    {item}
                                </StyledItem>
                        ))}
                    </StyledSymbolWrap> :
                        <>
                            {(value as IFee).bean}<br />{(value as IFee).usdt}
                        </>
            }
        </StyledValue>
    </StyledGroup>
}
export default BeGroupMoreInfo

const StyledGroup = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:7px;
    align-items: flex-start;
`
const StyledLabel = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    display: inline-flex;
    align-items:center;
`
const StyledIcon = styled.div`
    margin-left: 4px;
    width:10px;
    svg,
    img{
        height: 10px;
        height: 10px;
    }
`
const StyledValue = styled.div<{ highlightValue: boolean }>`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color:${props => props.highlightValue ? '#4E9AFD' : '#FFFFFF'} ;
    text-align: right;
`
const StyledSymbolWrap = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 5px;
`
const StyledItem = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 5px;
`