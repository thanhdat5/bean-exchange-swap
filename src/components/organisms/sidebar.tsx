import BeIcHome from "components/atoms/icons/icon-home";
import BeLogo from "components/molecules/logo";
import BeSidebarItem from "components/molecules/sidebar-item";
import styled from "styled-components";

const BeSidebar = () => {
    return <StyledSidebar>
        <StyledLogo>
            <BeLogo />
        </StyledLogo>
        <BeSidebarItem
            icon={<BeIcHome />}
            title="Home"
            href="/"
        />
        <BeSidebarItem
            icon={<BeIcHome />}
            title="Home"
            href="/"
        />
        <BeSidebarItem
            icon={<BeIcHome />}
            title="Home"
            href="/"
        />
        <BeSidebarItem
            icon={<BeIcHome />}
            title="Home"
            href="/"
        />
        <BeSidebarItem
            icon={<BeIcHome />}
            title="Home"
            href="/"
        />
    </StyledSidebar>
}
export default BeSidebar;
const StyledSidebar = styled.div`
    width: 44px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #16264F;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 16px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 4px;
    }
`
const StyledLogo = styled.div`
    width: 30px;
    height: 30px;
    margin-top: 16px;
    margin-bottom: 16px;
`