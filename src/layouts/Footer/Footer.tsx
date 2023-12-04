import './Footer.css'
import Divider from '../../components/Divider/Divider'
import DarkModeToggle from '../../components/Toggle/Toggle'
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import github from '../../assets/github.svg'


function Footer() {
    return(
        <>
            <Divider/>
            <div className='footer__container'>
                <DarkModeToggle></DarkModeToggle>
                <div className='footer__icons'>
                    <a href="https://www.linkedin.com/in/lea-stellini/" aria-label="lien vers mon compte LinkedIn" >
                        <IconContext.Provider value={{className:"icons"}}>
                            <FaLinkedin/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://github.com/lea-stellini" aria-label="lien vers mon compte Github">
                        <IconContext.Provider value={{className:"icons"}}>
                            <FaGithub/>
                        </IconContext.Provider>    
                    </a>
                </div>
            </div>
        </>
        
    )
}

export default Footer