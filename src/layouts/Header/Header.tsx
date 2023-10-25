import "./Header.css"
import logo from "../../assets/logo.webp"
import Button from "../../components/Button/Button"
import Hamburger from "../../components/Hamburger/Hamburger"
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'


function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const mobileDevice = () => {
        if(screen.width < 767){
            toggleHamburger()
        }
    }



 return(
    <div className="header__container">
        <div className="header">
            <HashLink to="/#banner"><img  className="header__img" src={logo} alt="logo contenant le prénom Léa" width="40" height="40"/></HashLink>
            <nav className={`header__nav ${hamburgerOpen ? "nav__hamburger" : "none" }`}>
                <ul>
                    <li><HashLink to="/#about" onClick={mobileDevice}>A PROPOS</HashLink></li>
                    <li><HashLink to="/#projects" onClick={mobileDevice}>PROJETS</HashLink></li>
                    <li><HashLink to="/#skills" onClick={mobileDevice}>COMPETENCES</HashLink></li>
                    <li><HashLink to="/#path" onClick={mobileDevice}>PARCOURS</HashLink></li>
                    <li><HashLink to="/#contact"><Button title="contact" onClick={mobileDevice} /></HashLink></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}  />
            </div>
        </div>          
    </div>
    
    
 )
}

export default Header