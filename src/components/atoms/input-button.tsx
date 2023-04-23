import styled from 'styled-components';

type Props = {
    value: number;
    label: string;
    selected?: boolean;
    disabled?: boolean;
    margin?: number | string;
    padding?: number | string;
    width?: number | string;
    height?: number | string;
    onClick: (value: number) => void;
}
const BeInputButton = ({
    value,
    label,
    selected,
    disabled = false,
    margin = 0,
    padding = "11px 12px 10px",
    width = "100%",
    height = 39,
    onClick
}: Props) => {
    return <StyledInputButton
        className={selected ? 'selected' : ''}
        width={typeof (width) === 'number' ? `${width}px` : width}
        type="button"
        disabled={disabled}
        height={typeof (height) === 'number' ? `${height}px` : height}
        margin={typeof (margin) === 'number' ? `${margin}px` : margin}
        padding={typeof (padding) === 'number' ? `${padding}px` : padding}
        onClick={() => onClick(value)}>
        {label}
    </StyledInputButton>
}
export default BeInputButton

const StyledInputButton = styled.button<{
    height: string,
    margin: string,
    padding: string,
    width: string
}>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-radius: 10px;
    background-color: rgb(255 255 255 / 80%);
    border: 0;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #16264F;
    transition: all ease-in-out .3s;
    outline: 0;
    background-color: rgba(255,255,255,0.2);
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