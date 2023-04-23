import styled from 'styled-components';

type Props = {
    caption: string;
    margin?: number | string;
    padding?: number | string;
    width?: number | string;
    height?: number | string;
    fontSize?: number | string;
    borderRadius?: number | string;
    ghost?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
const BeButton = ({
    caption = '',
    margin = 0,
    padding = "7px 24px",
    width,
    height = 36,
    fontSize = '14px',
    borderRadius = '10px',
    ghost = false,
    disabled = false,
    onClick
}: Props) => {
    return <StyledButton
        type="button"
        disabled={disabled}
        onClick={onClick}
        width={typeof (width) === 'number' ? `${width}px` : width}
        height={typeof (height) === 'number' ? `${height}px` : height}
        fontSize={typeof (fontSize) === 'number' ? `${fontSize}px` : fontSize}
        margin={typeof (margin) === 'number' ? `${margin}px` : margin}
        padding={typeof (padding) === 'number' ? `${padding}px` : padding}
        borderRadius={typeof (borderRadius) === 'number' ? `${borderRadius}px` : borderRadius}
        ghost={ghost}
    >
        {caption}
    </StyledButton>
}
export default BeButton

const StyledButton = styled.button<{
    width?: string,
    height: string,
    fontSize: string,
    margin: string,
    padding: string,
    borderRadius: string,
    ghost: boolean
}>`
    ${props => props.width ? `width: ${props.width};` : ''}
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.ghost ? 'transparent' : '#4E9AFD'};
    border: ${props=>props.ghost ? '1px solid #16264F' : '0'};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    white-space: nowrap;
    font-weight: 600;
    font-size:  ${props => props.fontSize};
    line-height: 22px;
    color: ${props=>props.ghost ? '#16264F' : '#FFFFFF'};
    transition: all ease-in-out .3s;
    text-decoration: none;
    &:disabled{
        opacity: 0.5;
    }
    &:not(:disabled){
        &:hover{
            background-color: ${props=>props.ghost ? '#16264F' : 'rgb(78 154 253 / 70%)'};
            color:#fff;
        }
    }
`