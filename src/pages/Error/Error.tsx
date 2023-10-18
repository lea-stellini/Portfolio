import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
    return(
        <div className='error__container' >
            <h1 className='error__title'>404</h1>
            <p className='error__text'>La page que vous demandez n&apos;existe pas</p>
            <Link to="/" className='link'>Retourner sur la page d&apos;accueil</Link>
        </div>
    )
}

export default Error