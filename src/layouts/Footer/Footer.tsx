import './Footer.css'
import Divider from '../../components/Divider/Divider'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

function Footer() {

    return(
        <>
            <Divider/>
            <div className='footer__container'>
                <a href=""><img src={linkedin}/></a>
                <a href=""><img src={github}/></a>
            </div>
        </>
        
    )
}

export default Footer