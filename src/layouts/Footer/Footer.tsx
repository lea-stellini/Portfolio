import './Footer.css'
import Divider from '../../components/Divider/Divider'
import DarkModeToggle from '../../components/Toggle/Toggle'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'


function Footer() {
    return(
        <>
            <Divider/>
            <div className='footer__container'>
                <DarkModeToggle></DarkModeToggle>
                <div className='footer__icons'>
                    <a href="https://www.linkedin.com/in/lea-stellini/"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://github.com/lea-stellini"><img src={github} alt="github"/></a>
                </div>
            </div>
        </>
        
    )
}

export default Footer