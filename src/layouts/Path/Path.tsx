import Divider from '../../components/Divider/Divider';
import Card from '../../components/Card/Card';
import './Path.css';

function Path(){

    return(
        <div id="path">
            <Divider />
            <div className='path__container'>
                <div className='timeline'>
                    <h2>Parcours</h2>
                    <div>
                        <div className='dot'></div>
                        <Card 
                            title="Formation développeuse web en alternance"
                            year="2022 - 2023"
                            where="OpenClassroom"
                            skills={["Créer des applications web dynamiques avec JavaScript et React",
                            "Améliorer le référencement naturel",
                            "Communiquer avec le back-end de l'application grâce à une API",
                            "Créer, gérer et afficher le contenu d'une base de données",
                            "Résoudre des problèmes techniques avec un langage de programmation et des algorithmes"]}
                            /> 
                    </div>
                    
                    <div>
                        <div className='dot'></div>
                        <Card 
                            title="Formation en autodidacte"
                            year="Depuis 2020"
                            where="Udemy, Skillshare, Codecademy"
                            skills={["Création de sites web avec HTML5 et CSS3",
                                "Animer des pages web avec CSS3",
                                "Construire un site internet responsive",
                                "Faire réagir des pages web avec JavaScript" ]}
                            inverted />
                    </div>
                        
                    <div>
                        <div className='dot'></div>
                        <Card 
                             title="Animatrice - Coordinatrice en maison de retraite"
                             year="2019 - 2021"
                             where="Saint-Mathurin sur Loire | 49"
                             skills={["Mise à jour du site internet et des réseaux sociaux", "Planification et organisation du planning animation",
                             "Encadrement de jeunes en service civique" ]}
                            />
                    </div>
                        
                </div>
            
            </div>
        </div>
    )

}

export default Path 