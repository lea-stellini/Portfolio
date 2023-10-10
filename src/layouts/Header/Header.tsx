import "./Header.css"
import logo from "../../assets/logo.webp"
import Button from "../../components/Button/Button"
import Hamburger from "../../components/Hamburger/Hamburger"
import { useState } from 'react'


function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        console.log("test")
        setHamburgerOpen(!hamburgerOpen)
    }

 return(
    <div style={{position: 'relative'}}>
        <div className="header">
            <img  className="header__img" src={logo} alt="logo contenant le prénom Léa" />
            <nav className={`header__nav ${hamburgerOpen ? "nav__hamburger" : "none" }`}>
                <ul>
                    <li><a href="">A PROPOS</a></li>
                    <li><a href="">PROJETS</a></li>
                    <li><a href="">COMPETENCES</a></li>
                    <li><a href="">PARCOURS</a></li>
                    <li><Button title="contact" /></li>
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