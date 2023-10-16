import './Projects.css';
import datas from '../../datas/projects.json'
import Divider from '../../components/Divider/Divider';
import ProjectModal from '../../components/Modal/Modal';
import { useState } from 'react';

function Projects(){
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        console.log("true")
        setIsOpen(true);
    }

    function closeModal() {
        console.log('false')
        setIsOpen(false);
    }

    return(
        <div id="projects">
            <Divider />
            <div className='projects__container'>
                <h2>Projets</h2>
                <div className='projects'>
                {
                    datas.map( data => {
                        return ( 
                        <div className='img__container' key={data.id} onClick={openModal}>
                            <img src={data.cover[0]} alt={`photo du projet ${data.title}`}/>
                            <ProjectModal isOpen={modalIsOpen} isClose={closeModal}/>
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