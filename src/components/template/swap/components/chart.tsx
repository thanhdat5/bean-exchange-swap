import styled from "styled-components"

const BeSwapChart = () => {
    return <StyledChart>
        <img src="https://i.ibb.co/dPbptY2/demo.png" alt="" />
    </StyledChart>
}
export default BeSwapChart

const StyledChart = styled.div`
    padding-top:38px;
    background-color: #031A35;
    border-radius: 10px;
    overflow: hidden;
    max-height:80vh;
    img,
    iframe{
        width: 100%;
    }
    img{
        mix-blend-mode: screen;
    }
    @media(max-width:991px){
        margin-top: 30px;
    }
`