import './Projects.css';
import datas from '../../datas/projects.json'
import Divider from '../../components/Divider/Divider';

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
                        <div className='img__container' key={data.id}>
                            <img src={data.pictures[0]} alt={`photo du projet ${data.title}`}/>
                        </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )

}

export default Projects