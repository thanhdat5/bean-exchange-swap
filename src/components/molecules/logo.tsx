import { Image } from 'react-bootstrap';

type Props = {
    src?: string;
    alt?: string;
}
const BeLogo = ({
    src = 'https://bean-exchange.vercel.app/favicon.ico',
    alt = ''
}: Props) => {
    return <Image className='img-fluid' src={src} alt={alt} />
}
export default BeLogo