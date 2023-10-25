import './Projects.css';
import datas from '../../datas/projects.json'
import Divider from '../../components/Divider/Divider';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function Projects(){

    return(
        <div id="projects">
            <Divider />
            <div className='projects__container'>
                <h2>Projets</h2>
                <div className='projects'>
                {
                    datas.map( data => {
                        return ( 
                        <ProjectCard link={`/project/${data.id}`} 
                                    key={data.id} 
                                    cover={data.cover} 
                                    title={data.title} />
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )

}

export default Projects