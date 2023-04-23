import BeCircleImage from 'components/atoms/circle-image';
import styled from 'styled-components';

type Props = {
    name: string;
    symbol: string;
    value: number;
    iconImage?: string;
    iconMargin?: number | string;
    iconPadding?: number | string;
    iconSize?: number | string;
    iconBackground?: string;
}
const BeTokenSwap = ({
    name,
    symbol,
    value,
    iconImage,
    iconMargin = '0 0 6px 0 ',
    iconPadding = "0",
    iconSize = "32px",
    iconBackground = "#fff"
}: Props) => {
    return <StyledTokenSwap>
        <BeCircleImage
            image={iconImage}
            alt={symbol}
            title={name}
            margin={iconMargin}
            padding={iconPadding}
            size={iconSize}
            background={iconBackground}
            border='1px #fff solid'
        />
        <StyledGroup>
            <StyledValue>{value}</StyledValue>
            <StyledSymbol>{symbol}</StyledSymbol>
        </StyledGroup>
    </StyledTokenSwap>
}
export default BeTokenSwap
const StyledTokenSwap = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StyledGroup = styled.div`
    display:flex;
    align-items: center;
`
const StyledValue = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
    margin-right: 4px;
`
const StyledSymbol = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
`