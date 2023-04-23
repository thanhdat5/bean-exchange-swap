import BeCircleImage from 'components/atoms/circle-image';
import styled from 'styled-components';

type Props = {
    name: string;
    symbol: string;
    primaryBalance: number;
    secondaryBalance?: number;
    iconImage?: string;
    iconMargin?: number | string;
    iconSize?: number | string;
    iconBackground?: string;
    onClick: () => void;
}
const BeTokenInfo = ({
    name,
    symbol,
    primaryBalance,
    secondaryBalance,
    iconImage,
    iconMargin = '0 13px 0 0 ',
    iconSize,
    iconBackground,
    onClick
}: Props) => {
    return <StyledTokenItem onClick={onClick}>
        <BeCircleImage
            image={iconImage}
            alt={symbol}
            title={name}
            margin={iconMargin}
            size={iconSize}
            background={iconBackground}
        />
        <StyledInfo>
            <StyledLeft>
                <StyledName>{name}</StyledName>
                {secondaryBalance ? <StyledSecondaryBalance>{secondaryBalance}&nbsp;{symbol}</StyledSecondaryBalance> : <></>}
            </StyledLeft>
            <StyledBalance>${primaryBalance}</StyledBalance>
        </StyledInfo>
    </StyledTokenItem>
}
export default BeTokenInfo
const StyledTokenItem = styled.div`
    width:280px;
    max-width:100%;
    display: flex;
    cursor: pointer;
`
const StyledInfo = styled.div`
    display:flex;
    flex: 1;
    justify-content: space-between;
`
const StyledLeft = styled.div`
`
const StyledName = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
`
const StyledSecondaryBalance = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    opacity: 0.5;
`
const StyledBalance = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
`