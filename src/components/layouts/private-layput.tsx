import BeSidebar from "components/organisms/sidebar"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Container } from 'react-bootstrap';

const BePrivateLayout = () => {
    return <StyledApp className="be-app-layout">
        <BeSidebar />
        <StyledMain>
            <Container>
                <Outlet />
            </Container>
        </StyledMain>
    </StyledApp>
}
export default BePrivateLayout
const StyledApp = styled.div`
    min-height: 100vh;
`
const StyledMain = styled.div`
    padding-left: 44px;
`