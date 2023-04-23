import styled from "styled-components"

type Props = {
    label: string;
    value: number | string;
}
const BeGroupInfo = ({ label, value }: Props) => {
    return <StyledGroup>
        <StyledLabel>{label}</StyledLabel>
        <StyledValue>{value}</StyledValue>
    </StyledGroup>
}
export default BeGroupInfo

const StyledGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom:12px;
`
const StyledLabel = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    opacity: 0.5;
`
const StyledValue = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
`