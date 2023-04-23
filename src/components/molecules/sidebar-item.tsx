import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {
    href: string;
    icon: JSX.Element;
    title: string;
}
const BeSidebarItem = ({
    icon,
    title,
    href
}: Props) => {
    return <StyledItem to={href} title={title} className={({ isActive }) =>
        isActive ? "active" : ""
    }>
        {icon}
    </StyledItem>
}
export default BeSidebarItem;
const StyledItem = styled(NavLink)`
    width: 24px;
    height: 24px;
    text-decoration: none;
    opacity: 0.5;
    transition: all ease-in-out .3s;
    &:hover,
    &.active{
        opacity: 1;
    }
`