import "./Header.css"
import logo from "../../assets/logo.webp"
import Button from "../../components/Button/Button"
import Hamburger from "../../components/Hamburger/Hamburger"
import { useState } from 'react'


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
            <a href="#banner"><img  className="header__img" src={logo} alt="logo contenant le prénom Léa" width="40" height="40"/></a>
            <nav className={`header__nav ${hamburgerOpen ? "nav__hamburger" : "none" }`}>
                <ul>
                    <li><a href="#about" onClick={mobileDevice}>A PROPOS</a></li>
                    <li><a href="#projects" onClick={mobileDevice}>PROJETS</a></li>
                    <li><a href="#skills" onClick={mobileDevice}>COMPETENCES</a></li>
                    <li><a href="#path" onClick={mobileDevice}>PARCOURS</a></li>
                    <li><a href="#contact"><Button title="contact" onClick={mobileDevice} /></a></li>
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