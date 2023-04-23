import styled from 'styled-components';

type Props = {
    type?: 'text' | 'number' | 'search' | 'email';
    placeholder?: string;
    value?: string | number;
    readOnly?: boolean;
    disabled?: boolean;
    margin?: number | string;
    padding?: number | string;
    width?: number | string;
    height?: number | string;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
}
const BeInput = ({
    type = 'text',
    placeholder,
    value,
    readOnly = false,
    disabled = false,
    margin = 0,
    padding = "11px 12px 10px",
    width = "100%",
    height = 39,
    iconLeft,
    iconRight,
    onChange,
    onBlur
}: Props) => {
    return <StyledInputWrap width={typeof (width) === 'number' ? `${width}px` : width}>
        {iconLeft ? <StyledIconLeft>{iconLeft}</StyledIconLeft> : <></>}
        <StyledInput
            readOnly={readOnly}
            disabled={disabled}
            type={type}
            value={value}
            placeholder={placeholder}
            height={typeof (height) === 'number' ? `${height}px` : height}
            margin={typeof (margin) === 'number' ? `${margin}px` : margin}
            padding={typeof (padding) === 'number' ? `${padding}px` : padding}
            iconLeft={iconLeft !== undefined}
            iconRight={iconRight !== undefined}
            onChange={(e) => onChange ? onChange(e.target.value) : null}
            onBlur={(e) => onBlur ? onBlur(e.target.value) : null}
        />
        {iconRight ? <StyledIconRight>{iconRight}</StyledIconRight> : <></>}
    </StyledInputWrap>
}
export default BeInput

const StyledInputWrap = styled.div<{ width: string }>`
    width: ${props => props.width};
    position: relative;
`
const StyledIconLeft = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    left: 12px;
    top: 11px;
    display: inline-flex;
`
const StyledIconRight = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    right: 12px;
    top: 11px;
    display: inline-flex;
`
const StyledInput = styled.input<{
    height: string,
    margin: string,
    padding: string,
    iconLeft: boolean,
    iconRight: boolean
}>`
    width: 100%;
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    ${props => props.iconLeft ? 'padding-left: 40px;' : ''}
    ${props => props.iconRight ? 'padding-right: 40px;' : ''}
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
    &:disabled{
        opacity: 0.2;
    }
    &:not(:disabled){
        &:hover,
        &:focus{
            background-color: #fff;
        }
    }
`