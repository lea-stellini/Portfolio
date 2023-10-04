import './Hamburger.css'


function Hamburger({isOpen}) {
 
    return(
        <div className="hamburger">
            <div className={`burger ${ isOpen ? "burger1" : "burgerNotOpen" }`}></div>
            <div className={`burger ${ isOpen ? "burger2" : "burger2NotOpen" }`}></div>
            <div className={`burger ${ isOpen ? "burger3" : "burgerNotOpen" }`}></div>
        </div>
    )
}

export default Hamburger