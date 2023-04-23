import BeButton from "components/atoms/button"
import BeModal from "components/molecules/modal"
import styled from "styled-components"

type Props = {
    title?: string;
    subTitle?: string;
    description?: JSX.Element;
    closeButtonText?: string;
    onDissmiss?: () => void;
}
const BeSuccessModal = ({
    title = "Success",
    subTitle,
    description,
    closeButtonText="Close",
    onDissmiss
}: Props) => {
    return <BeModal noHeader>
        <StyledSuccessWrap>
            <StyledSuccessIcon>
                <svg width="159" height="159" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="79.5" cy="79.5" r="79" fill="url(#paint0_linear_63_558)" />
                    <path d="M120.5 60.3126L71.5001 109.313C71.0733 109.741 70.5662 110.081 70.0078 110.312C69.4494 110.544 68.8508 110.664 68.2462 110.664C67.6416 110.664 67.0429 110.544 66.4846 110.312C65.9262 110.081 65.4191 109.741 64.9923 109.313L43.5548 87.8751C43.1275 87.4478 42.7885 86.9405 42.5573 86.3822C42.326 85.8239 42.207 85.2255 42.207 84.6212C42.207 84.0169 42.326 83.4185 42.5573 82.8602C42.7885 82.3019 43.1275 81.7946 43.5548 81.3673C43.9821 80.9399 44.4894 80.601 45.0477 80.3697C45.606 80.1385 46.2044 80.0194 46.8087 80.0194C47.413 80.0194 48.0114 80.1385 48.5697 80.3697C49.128 80.601 49.6353 80.9399 50.0626 81.3673L68.25 99.5547L114 53.8124C114.863 52.9494 116.033 52.4646 117.254 52.4646C118.474 52.4646 119.645 52.9494 120.508 53.8124C121.371 54.6754 121.856 55.8459 121.856 57.0663C121.856 58.2868 121.371 59.4572 120.508 60.3202L120.5 60.3126Z" fill="#4E9AFD" />
                    <defs>
                        <linearGradient id="paint0_linear_63_558" x1="94.9914" y1="158.5" x2="94.9914" y2="0.499994" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#CBE2FF" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
            </StyledSuccessIcon>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubTitle>{subTitle}</StyledSubTitle>
            {description ? <StyledDescription>{description}</StyledDescription> : <></>}
            <StyledButton>
                <BeButton width={206} caption={closeButtonText} onClick={onDissmiss}/>
            </StyledButton>
        </StyledSuccessWrap>
    </BeModal>
}
export default BeSuccessModal

const StyledSuccessWrap = styled.div`
    padding-top: 8px;
`
const StyledSuccessIcon = styled.div`
    text-align: center;
    margin-bottom: 12px;
`
const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #4E9AFD;
    margin-bottom: 20px;
    position: relative;
    &:before{
        content: '';
        width: calc(100% + 64px);
        position: absolute;
        bottom: -10px;
        left: -32px;
        height: 0.5px;
        background-color: #4E9AFD;
        opacity: 0.4;
    }
`
const StyledSubTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #4E9AFD;
`
const StyledDescription = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: rgba(255,255,255,0.5);
`
const StyledButton = styled.div`
    text-align: center;
    margin-top: 13px;
`