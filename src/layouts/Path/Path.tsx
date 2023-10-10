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
                            skills={["Création de sites web avec HTML5 et CSS3",
                                "Animer des pages web avec CSS3",
                                "Construire un site internent responsive",
                                "Faire réagir des pages web avec JavaScript"]}
                            /> 
                    </div>
                    
                    <div>
                        <div className='dot'></div>
                        <Card 
                            title="Formation développeuse web en alternance"
                            year="2022 - 2023"
                            where="OpenClassroom"
                            skills={["Création de sites web avec HTML5 et CSS3",
                                "Animer des pages web avec CSS3",
                                "Construire un site internent responsive",
                                "Faire réagir des pages web avec JavaScript"]}
                            inverted />
                    </div>
                        
                    <div>
                        <div className='dot'></div>
                        <Card 
                            title="Formation développeuse web en alternance"
                            year="2022 - 2023"
                            where="OpenClassroom"
                            skills={["Création de sites web avec HTML5 et CSS3",
                                "Animer des pages web avec CSS3",
                                "Construire un site internent responsive",
                                "Faire réagir des pages web avec JavaScript"]} />
                    </div>
                        
                </div>
            
            </div>
        </div>
    )

}

export default Path 