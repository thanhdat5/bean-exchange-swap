import styled from 'styled-components';

type Props = {
    image?: string;
    alt?: string;
    title?: string;
    margin?: number | string;
    size?: number | string;
    background?: string;
    border?: string;
}
const BeCircleImage = ({
    image = '',
    alt = '',
    title = '',
    margin = 0,
    size = 40,
    background = 'linear-gradient(360deg, #FFEDAE 0%, #D9FFDD 100%)',
    border = 'none'
}: Props) => {
    return <StyledCircleImage
        size={typeof (size) === 'number' ? `${size}px` : size}
        background={background}
        title={title}
        margin={typeof (margin) === 'number' ? `${margin}px` : margin}
    >
        {image ? <img src={image} alt={alt} /> : <></>}
    </StyledCircleImage>
}
export default BeCircleImage

const StyledCircleImage = styled.div<{
    size?: number | string,
    background?: string,
    border?: string,
    margin?: number | string,
}>`
    width: ${props => props.size};
    height: ${props => props.size};
    border: ${props => props.border};
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.background};
    margin: ${props => props.margin};
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`