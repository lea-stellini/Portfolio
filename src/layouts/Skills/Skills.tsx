import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';
import cv from '../../assets/CV_STELLINI_LEA.pdf';
import './Skills.css';

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
                            <img src="../../assets/skills/html5.svg" alt="html" width="40" height="40"/>
                            <img src="../../assets/skills/react.svg" alt="react" width="40" height="40"/>
                            <img src="../../assets/skills/vuejs.svg" alt="vuejs" width="40" height="40"/>
                            <img src="../../assets/skills/js.svg" alt="javascript" width="40" height="40"/>
                            <img src="../../assets/skills/css3-alt.svg" alt="css" width="40" height="40"/>
                            <img src="../../assets/skills/sass.svg" alt="sass" width="40" height="40"/>
                            <img src="../../assets/skills/bootstrap.svg" alt="Bootstrap" width="40" height="40"/>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Back-End</h3>
                        <div className='skill__grid'>
                            <img src="../../assets/skills/node.svg" alt="Node" width="40" height="40"/>
                            <img src="../../assets/skills/Expressjs.webp" alt="Express" width="40" height="40"/>
                            <img src="../../assets/skills/MongoDB.webp" alt="MongoDB" width="40" height="40"/>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Outils</h3>
                        <div className='skill__grid'>
                            <img src="../../assets/skills/figma.svg" alt="figma" width="40" height="40"/>
                            <img src="../../assets/skills/git.svg" alt="git" width="40" height="40"/>
                            <img src="../../assets/skills/gitlab.svg" alt="gitlab" width="40" height="40"/>
                        </div>
                    </div>
                </div>
                <Button title="CV" onClick={handleClick}/>
            </div>
        </div>
    )

}

export default Skills