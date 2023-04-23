import BeButton from "components/atoms/button";
import BeIcInfo from "components/atoms/icons/icon-info";
import styled from "styled-components"

type Props = {
    label: string;
    buttonText: string;
    onButtonClick: () => void;
}
const BeUpdated = ({ label, buttonText, onButtonClick }: Props) => {
    return <StyledGroup>
        <StyledLeft>
            <BeIcInfo />
            <StyledLabel>{label}</StyledLabel>
        </StyledLeft>
        <BeButton caption={buttonText} onClick={onButtonClick} padding="6px 7px" fontSize="12px" height="24px" width="70px" borderRadius="5px" />
    </StyledGroup>
}
export default BeUpdated

const StyledGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    background: rgba(78, 154, 253, 0.3);
    border-radius: 10px;
    padding:8px 10px;
`
const StyledLeft = styled.div`
    display:flex;
    align-items:center;
    flex: 1;
`
const StyledLabel = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    margin-left:10px;
    flex: 1;
`