import './ProjectCard.css';
import { Link } from 'react-router-dom';

type Props = {
    link: string,
    cover: string,
    title: string,
}

function ProjectCard({link, cover, title}: Props) {
    return(
        <Link to={link} className='img__container'>
            <img src={cover} alt={`photo du projet ${title}`}/>
        </Link>
    )

}

export default ProjectCard