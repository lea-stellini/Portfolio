import './Projects.css';
import datas from '../../datas/projects.json'
import Divider from '../../components/Divider/Divider';

function Projects(){

    return(
        <>
            <Divider />
            <div className='projects__container'>
                <h2>Projets</h2>
                <div className='projects'>
                {
                    datas.map( data => {
                        return ( 
                        <div className='img__container' key={data.id}>
                            <img src={data.pictures[0]}/>
                        </div>
                        )
                    })
                }
                </div>
                
            </div>
        </>
    )

}

export default Projects