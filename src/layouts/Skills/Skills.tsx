import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';
import cv from '../../assets/CV_STELLINI_LEA.pdf';
import './Skills.css';
import html from '../../assets/skills/html5.svg';
import react from '../../assets/skills/react.svg';
import vuejs from '../../assets/skills/vuejs.svg';
import js from '../../assets/skills/js.svg';
import css from '../../assets/skills/css3-alt.svg';
import sass from '../../assets/skills/sass.svg';
import bootstrap from '../../assets/skills/bootstrap.svg';
import node from '../../assets/skills/node.svg';
import express from '../../assets/skills/Expressjs.webp';
import mongodb from '../../assets/skills/MongoDB.webp';
import figma from '../../assets/skills/figma.svg';
import git from '../../assets/skills/git.svg';
import gitlab from '../../assets/skills/gitlab.svg';

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
                            <img src={html} alt="html" width="40" height="40"/>
                            <img src={react} alt="react" width="40" height="40"/>
                            <img src={vuejs} alt="vuejs" width="40" height="40"/>
                            <img src={js} alt="javascript" width="40" height="40"/>
                            <img src={css} alt="css" width="40" height="40"/>
                            <img src={sass} alt="sass" width="40" height="40"/>
                            <img src={bootstrap} alt="Bootstrap" width="40" height="40"/>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Back-End</h3>
                        <div className='skill__grid'>
                            <img src={node} alt="Node" width="40" height="40"/>
                            <img src={express} alt="Express" width="40" height="40"/>
                            <img src={mongodb} alt="MongoDB" width="40" height="40"/>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Outils</h3>
                        <div className='skill__grid'>
                            <img src={figma} alt="figma" width="40" height="40"/>
                            <img src={git} alt="git" width="40" height="40"/>
                            <img src={gitlab} alt="gitlab" width="40" height="40"/>
                        </div>
                    </div>
                </div>
                <Button title="CV" onClick={handleClick}/>
            </div>
        </div>
    )

}

export default Skills