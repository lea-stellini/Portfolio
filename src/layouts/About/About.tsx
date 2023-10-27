import './About.css'
import Divider from '../../components/Divider/Divider'

function About(){

    return( 
        <div id='about'>
            <Divider />
            <div className='about'>
                <h2>A Propos</h2>
                <p className='about__text'>
                Après avoir découvert l’univers du web par le biais du site internet de mon ancien lieu de travail, curieuse et désireuse d’en apprendre davantage, j’ai commencé par développer mes compétences en autodidacte. <br></br>
                <br></br>
                Fin 2022, j’ai débuté une formation d'un an en alternance avec OpenClassroom.<br></br>
                <br></br>
                Aujourd’hui, je suis ravie de pouvoir partager avec vous les différents projets réalisés lors de celle-ci ! 
                </p>
            </div>      
        </div>
        
    )

}

export default About