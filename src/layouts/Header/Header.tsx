import "./Header.css"
import logo from "../../assets/logo.webp"
import Button from "../../components/Button/Button"
import Hamburger from "../../components/Hamburger/Hamburger"
import { useState } from 'react'
import { Link } from 'react-router-dom'


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
            <Link to="/#banner"><img  className="header__img" src={logo} alt="logo contenant le prénom Léa" width="40" height="40"/></Link>
            <nav className={`header__nav ${hamburgerOpen ? "nav__hamburger" : "none" }`}>
                <ul>
                    <li><Link to="/#about" onClick={mobileDevice}>A PROPOS</Link></li>
                    <li><Link to="/#projects" onClick={mobileDevice}>PROJETS</Link></li>
                    <li><Link to="/#skills" onClick={mobileDevice}>COMPETENCES</Link></li>
                    <li><Link to="/#path" onClick={mobileDevice}>PARCOURS</Link></li>
                    <li><Link to="/#contact"><Button title="contact" onClick={mobileDevice} /></Link></li>
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