import Button from '../../components/Button/Button';
import img1 from '/assets/images/Projet2/bookie2.png';
import img2 from '/assets/images/Projet2/bookie1-tab.png';
import { useParams, useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import datas from '../../datas/projects.json';
import './Project.css'

function Project(){
    const params = useParams();
    const project = datas.find(data => data.id === params.id)

    const handleClick = () => {
        window.open(project?.link, "_blank")
    }

    const navigate = useNavigate()

    useEffect (() => {
        if(!project){
            navigate('*')
        }
    }, [project, navigate])

    return (
        <>
            { project ? 
                <div className="project__container">
                <div className='project__header'>
                    <h2>{project.title}</h2>
                </div>
                <div className='project__body'>
                    <div className='project__description'>
                        
                        <h4>Technologies</h4>
                        <p>{project.technologies}</p>
                        <h4>Descriptif</h4>
                        <p>{project.description}
                        </p>
                        <h4>Compétences</h4>
                        <ul>
                            {
                                project.competences.map((competence,index) => {
                                    return(
                                        <li key={project.id + index}>{competence}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className='project__btn'>                        
                            <Button title={project.cta} onClick={handleClick}/>
                        </div>
                    </div>
                    <div className='project__images'>
                        <img src={project.pictures?.[0]} alt="" />
                        <img src={project.pictures?.[1]} alt="" />
                    </div>
                </div>
                
            </div> : null
            } 
        </>
    )
}

export default Project