import BeButton from "components/atoms/button"
import BeModal from "components/molecules/modal"
import styled from "styled-components"
import { Form } from "react-bootstrap"
import { useState } from "react"

type Props = {
    title: string;
    children: JSX.Element;
    agreeText: string;
    closeButtonText: string;
    onAccept: () => void;
    onDissmiss: () => void;
}
const BeDisclaimerModal = ({ title, children, agreeText, closeButtonText, onAccept, onDissmiss }: Props) => {
    const [checked, setChecked] = useState(false);
    return <BeModal
        onDissmiss={onDissmiss}
        title={title}
        className="no-header-border"
    >
        <>
            <StyledBody>
                {children}
            </StyledBody>
            <StyledConfirm>
                <Form.Check
                    onChange={e => setChecked(e.target.checked)}
                    type='checkbox'
                    label={agreeText}
                />
            </StyledConfirm>
            <BeButton disabled={!checked} caption={closeButtonText} width='100%' onClick={onAccept} />
        </>
    </BeModal>
}
export default BeDisclaimerModal
const StyledBody = styled.div`
    background: rgba(255,255,255,0.2);
    border-radius: 5px;
    padding: 10px 18px 12px;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    color: #FFFFFF;
    margin-bottom: 16px;
    max-height: 243px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 4px;
    }
`
const StyledConfirm = styled.div`
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 10px;
    color: #FFFFFF;
    .form-check{
        display: inline-flex;
        align-items: center;
        .form-check-input{
            width: 18px;
            height: 18px;
            border: 1px solid #FFFFFF;
            border-radius: 3px;
            margin-right: 8px;
            background-color: #16264f;
        }
    }
`