import styled from 'styled-components';

type Props = {
    icon: JSX.Element;
    symbol: string;
    disabled?: boolean;
    onClick: () => void;
}
const BeSelectTokenButton = ({
    icon,
    symbol,
    disabled = false,
    onClick
}: Props) => {
    return <StyledButton
        type="button"
        disabled={disabled}
        onClick={onClick}>
        {icon}
        {symbol}
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51733 7.25866L0 0.741333H13.0347L6.51733 7.25866Z" fill="#16264F" />
        </svg>
    </StyledButton>
}
export default BeSelectTokenButton

const StyledButton = styled.button`
    width: 130px;
    height: 42px;
    padding: 9px 12px;
    background: linear-gradient(360deg, #CBE2FF 0%, #FFFFFF 100%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6.64306px;
    border: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #16264F;
    transition: all ease-in-out .3s;
    outline: 0;
    background-color: rgba(255,255,255,0.2);
    display: inline-flex;
    align-items: center;
    justify-content:space-between;
    gap: 10px;
    svg{
        margin-left: auto;
    }
    &.selected{
        background-color: #fff;
    }
    &:not(:disabled){
        &:hover,
        &:focus{
            background-color: #fff;
        }
    }
`