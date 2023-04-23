import BeIcCloseModal from "components/atoms/icons/icon-close-modal";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

type Props = {
    title?: string;
    children: JSX.Element;
    footerButons?: JSX.Element;
    size?: 'sm' | 'lg' | 'xl';
    fullscreen?: true | string | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';
    centered?: boolean;
    noHeader?: boolean;
    className?: string;
    onDissmiss?: () => void;
}
const BeModal = ({
    title,
    children,
    footerButons,
    size = "sm",
    fullscreen,
    centered = true,
    noHeader = false,
    className = '',
    onDissmiss
}: Props) => {
    return <StyledModal
        show
        size={size}
        centered={centered}
        backdrop="static"
        keyboard={false}
        className={className}
        fullscreen={fullscreen}
        onHide={onDissmiss}
    >
        {!noHeader ?
            <Modal.Header>
                {title ? <Modal.Title>{title}</Modal.Title> : <></>}
                <StyledClose onClick={onDissmiss}>
                    <BeIcCloseModal />
                </StyledClose>
            </Modal.Header> : <></>
        }
        <Modal.Body>
            {children}
            {
                footerButons ? <StyledButtons>{footerButons}</StyledButtons> : <></>
            }
        </Modal.Body>

    </StyledModal>
}
export default BeModal

const StyledModal = styled(Modal)`
    &.no-header-border{
        .modal-content{
            .modal-header{
                border:0;
            }
            .modal-body{
                padding-top: 4px;
            }
        }
    }
    .modal-sm{
        max-width:335px;
    }
    .modal-content{
        background: #16264F;
        border-radius: 10px;
        min-height: 285px;
        .modal-header{
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom: 0.5px solid #4E9AFD;
            
            padding:16px 16px 8px;
            justify-content: center;
            position: relative;
            .modal-title{
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                color: #4E9AFD;
            }
        }
        .modal-body{
            padding: 24px 32px 32px;
        }
    }
`

const StyledClose = styled.button`
    padding: 0;
    border: 0;
    background-color: transparent;
    position: absolute;
    display: inline-flex;
    top: 16px;
    right: 18px;
    transition: all ease-in-out .3s;
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
`
const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`