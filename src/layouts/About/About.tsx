import './About.css'
import Divider from '../../components/Divider/Divider'

function About(){

    return(
        <>
            <Divider />
            <div className='about'>
                <h2>A Propos</h2>
                <p className='about__text'>
                    Bienvenue! Je m&apos;appelle Léa Stellini et je suis passionnée par l&apos;univers du web.
                    J&apos;ai commencé à apprendre à coder en 2020 pendant le confinement et depuis je n&apos;ai pas arrêté.
                    En avril 2022, j&apos;ai décidé de me lancer pleinement dans cette aventure afin de devenir développeuse front-end.
                </p>
            </div>      
        </>
        
    )

}

export default About