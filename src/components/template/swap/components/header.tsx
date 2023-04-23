import BeButton from "components/atoms/button";
import { useState } from "react";
import styled from "styled-components";

const BeSwapHeader = () => {
    const [selectedPageTab, setSelectedPageTab] = useState(1);
    return <StyledPageHeader>
        <BeButton
            width={123}
            height={42}
            ghost={selectedPageTab !== 1}
            onClick={() => setSelectedPageTab(1)}
            caption="Swap"
        />
        <BeButton
            width={123}
            height={42}
            ghost={selectedPageTab !== 2}
            onClick={() => setSelectedPageTab(2)}
            caption="Liquidity"
        />
    </StyledPageHeader>
}
export default BeSwapHeader

const StyledPageHeader = styled.div`
    margin-bottom:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 5px;
    button{
        font-size: 20px;
        line-height: 20px;
        font-weight: 700;
    }
`