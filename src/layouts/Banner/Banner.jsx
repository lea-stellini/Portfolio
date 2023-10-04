import './Banner.css';
import avatar from '../../assets/lea1 1.png'
import Button from '../../components/Button/Button'

function Banner() {
    return(
        <div className='banner__container'>
            <div className='banner'>
                <h1 className='banner__title'>Je suis Léa Stellini, <br /> développeuse <br /> front-end</h1>
                <Button title="CV"/>
            </div>
            <img className='banner__img' src={avatar} alt="photo de Léa" />
        </div>
    )
}

export default Banner