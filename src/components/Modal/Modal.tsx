import Modal from 'react-modal';
import Button from '../Button/Button';
import cover from '../../../images/Projet2/bookie1.webp';
import img1 from '../../../images/Projet2/bookie2.png';
import img2 from '../../../images/Projet2/bookie1-tab.png';
import './Modal.css';

type Props = {
    isOpen: boolean;
    isClose: (e : React.MouseEvent) => void;
}

function ProjectModal({isOpen, isClose}: Props) {
    return(
        <Modal isOpen={isOpen} className="modal__container">
            <div className='modal__header'>
                <h2>Projet</h2>
                <button onClick={isClose}>X</button>
            </div>
            <div className='modal__body'>
                <div className='modal__description'>
                    
                    <h3>Technologies</h3>
                    <ul>
                        <li>HTML</li>
                        {/* <li>CSS</li> */}
                    </ul>
                    <h3>Descriptif</h3>
                    <p>Participation à la conception du site portfolio d’une architect d’intérieur.
                        Pour ce projet, mes missions ont été de : 
                        Développer la page de présentation des travaux de l’architecte (galerie avec filtres). 
                        Développer la page de connexion à l’espace administrateur.
                        Développer une modale permettant d’ajouter de nouveaux projets avec une photo.
                    </p>
                    <h3>Compétences</h3>
                    <ul>
                        <li>Manipuler les éléments du DOM avec JavaScript</li>
                        <li>Récupérer les données utilisateurs dans le JavaScript via des formulaires
                        </li>
                        <li>Gérer les événements utilisateurs avec JavaScript
                        </li>
                    </ul>
                    <Button title="voir le site" />
                </div>
                <div className='modal__images'>
                    <img src={cover} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
            </div>
            
        </Modal>
    )

}

export default ProjectModal