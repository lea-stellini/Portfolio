import './Footer.css'
import Divider from '../../components/Divider/Divider'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

function Footer() {

    return(
        <>
            <Divider/>
            <div className='footer__container'>
                <a href="https://www.linkedin.com/in/lea-stellini/"><img src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/lea-stellini"><img src={github} alt="github"/></a>
            </div>
        </>
        
    )
}

export default Footer