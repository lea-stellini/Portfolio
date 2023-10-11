import './Banner.css';
import avatar from '../../assets/lea.webp'
import Button from '../../components/Button/Button'
import cv from '../../assets/CV_STELLINI_LEA.pdf'

function Banner() {

    const handleClick = () => {
        window.open(cv, "_blank")
    }

    return(
        <div id='banner'>
            <div className='banner__container'>
                <div className='banner'>
                    <h1 className='banner__title'>Je suis Léa Stellini, <br /> développeuse <br /> front-end</h1>
                    <Button title="CV" onClick={handleClick}/>
                </div>
                <img className='banner__img' src={avatar} alt="photo de Léa" />
            </div>  
        </div>
        
    )
}

export default Banner