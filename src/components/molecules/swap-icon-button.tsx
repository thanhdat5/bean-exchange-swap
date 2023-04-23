import BeIcArrowRight from "components/atoms/icons/icon-arrow-right";
import styled from "styled-components";

type Props = {
    size?: number | string;
    animation?: boolean;
}
const BeSwapIconButton = ({
    size = 21,
    animation = false
}: Props) => {
    return <StyledButton
        size={typeof (size) === 'number' ? `${size}px` : `${size}`}
    >
        <StyledIcon animation={animation}>
            <BeIcArrowRight />
        </StyledIcon>
    </StyledButton>
}
export default BeSwapIconButton;
const StyledButton = styled.button<{
    size: string;
}>`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: #4E9AFD;
    transition: all ease-in-out .3s;
    text-decoration: none;
    position: relative;
    &:disabled{
        opacity: 0.5;
    }
    &:not(:disabled){
        &:hover{
            background-color: rgb(78 154 253 / 70%);
        }
    }
`
const StyledIcon = styled.div<{ animation: boolean }>`
    display: inline-flex;
    position: absolute;
    top: 6px;
    left: 5px;
    transition: all ease-in-out .3s;
    animation: ${props => props.animation ? 'mymove 2s infinite' : ''};
    @keyframes mymove {
        0%,100% {
            top: -15px;
        }
        to {
            top: 6px;
        }
    }
`