import Modal from 'react-modal';
import Button from '../Button/Button';
import cover from '../../assets/images/Projet2/bookie1.webp';
import img1 from '../../assets/images/Projet2/bookie2.png';
import img2 from '../../assets/images/Projet2/bookie1-tab.png';
import './Modal.css';

type Props = {
    isOpen: boolean;
    isClose: (e : React.MouseEvent) => void;
    onClick?: (e : React.MouseEvent) => void;
}

function ProjectModal({isOpen, isClose, onClick}: Props) {
    return(
        <Modal isOpen={isOpen} className="modal__container">
            <div className='modal__header'>
                <h2>Bookie</h2>
                <button className='btn__close' onClick={isClose}>X</button>
            </div>
            <div className='modal__body'>
                <div className='modal__description'>
                    
                    <h4>Technologies</h4>
                    <p>HTML | CSS</p>
                    <h4>Descriptif</h4>
                    <p>Participation à la conception du site portfolio d’une architect d’intérieur.
                        Pour ce projet, mes missions ont été de : 
                        Développer la page de présentation des travaux de l’architecte (galerie avec filtres). 
                        Développer la page de connexion à l’espace administrateur.
                        Développer une modale permettant d’ajouter de nouveaux projets avec une photo.
                    </p>
                    <h4>Compétences</h4>
                    <ul>
                        <li>Manipuler les éléments du DOM avec JavaScript</li>
                        <li>Récupérer les données utilisateurs dans le JavaScript via des formulaires
                        </li>
                        <li>Gérer les événements utilisateurs avec JavaScript
                        </li>
                    </ul>
                    <Button title="voir le site" onClick={onClick}/>
                </div>
                <div className='modal__images'>
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                </div>
            </div>
            
        </Modal>
    )

}

export default ProjectModal