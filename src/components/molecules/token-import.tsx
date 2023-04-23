import BeButton from 'components/atoms/button';
import BeCircleImage from 'components/atoms/circle-image';
import styled from 'styled-components';

type Props = {
    name: string;
    symbol: string;
    iconImage?: string;
    iconMargin?: number | string;
    iconPadding?: number | string;
    iconSize?: number | string;
    iconBackground?: string;
    onImport: () => void;
}
const BeTokenImport = ({
    name,
    symbol,
    iconImage,
    iconMargin = '0 6px 0 0 ',
    iconPadding = "1px",
    iconSize = "28px",
    iconBackground = "#fff",
    onImport
}: Props) => {
    return <StyledTokenImport>
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
        <StyledInfo>
            <StyledLeft>
                <StyledName>{name}</StyledName>
                <StyledSymbol>{symbol}</StyledSymbol>
            </StyledLeft>
            <BeButton caption='Import' onClick={onImport} padding="6px 7px" fontSize="12px" height="24px" width="70px" borderRadius="5px" />
        </StyledInfo>
    </StyledTokenImport>
}
export default BeTokenImport
const StyledTokenImport = styled.div`
    width:280px;
    max-width:100%;
    display: flex;
    align-items: center;
`

const StyledInfo = styled.div`
    display:flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`
const StyledLeft = styled.div`
    
`
const StyledName = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`
const StyledSymbol = styled.div`
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #FFFFFF;
`