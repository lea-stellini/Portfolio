import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';
import cv from '../../assets/CV_STELLINI_LEA.pdf';
import './Skills.css';
import { IconContext } from "react-icons";
import { 
    FaHtml5, 
    FaReact, 
    FaVuejs, 
    FaCss3Alt, 
    FaSass, 
    FaBootstrap,
    FaNodeJs, 
    FaFigma } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoGit } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiGitlab, SiPostman } from 'react-icons/si'

function Skills(){

    const handleClick = () => {
        window.open(cv, "_blank")
    }
    
    return(
        <div id="skills">
            <Divider />
            <div className='skills__container'>
                <h2>Compétences</h2>
                <div className='skills'>
                    <div className='skill'>
                        <h3>Front-End</h3>
                        <div className='skill__grid'>
                            <IconContext.Provider value={{ className:"icons"}}>
                                <span className='icon'> 
                                    HTML
                                    <FaHtml5 aria-labelledby="Html5"/>
                                </span>
                                <span className='icon'>
                                    ReactJS
                                    <FaReact aria-labelledby="React"/>
                                </span>
                                <span className='icon'>
                                    VueJS
                                    <FaVuejs aria-labelledby="Vuejs"/>
                                </span>
                                <span className='icon'>
                                    JavaScript
                                    <BiLogoJavascript aria-labelledby="JavaScript"/>
                                </span>
                                <span className='icon'>
                                    CSS
                                    <FaCss3Alt aria-labelledby="Css"/>
                                </span>
                                <span className='icon'>
                                    Sass
                                    <FaSass aria-labelledby="Sass"/>
                                </span>
                                <span className='icon'>
                                    Bootstrap
                                    <FaBootstrap aria-labelledby="Bootstrap"/>
                                </span>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Back-End</h3>
                        <div className='skill__grid'>
                            <IconContext.Provider value={{ className:"icons"}}>
                                <span className='icon'>
                                    NodeJS
                                    <FaNodeJs aria-labelledby="Nodejs"/>
                                </span>
                                <span className='icon'>
                                    Express
                                    <SiExpress aria-labelledby="Express"/>
                                </span>
                                <span className='icon'>
                                    MongoDB
                                    <SiMongodb aria-labelledby="Mongodb"/>
                                </span>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Outils</h3>
                        <div className='skill__grid'>
                            <IconContext.Provider value={{ className:"icons"}}>
                                <span className='icon'>
                                    Figma
                                    <FaFigma aria-labelledby="Figma"/>
                                </span>
                                <span className='icon'>
                                    Git
                                    <BiLogoGit aria-labelledby="Git"/>
                                </span>
                                <span className='icon'>
                                    GitLab
                                    <SiGitlab aria-labelledby="GitLab"/>
                                </span>
                                <span className='icon'>
                                    Postman
                                    <SiPostman aria-labelledby='Postman'/>
                                </span>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
                <div className='skill__btn'>
                    <Button title="CV" onClick={handleClick}/>
                </div>
                
            </div>
        </div>
    )

}

export default Skills